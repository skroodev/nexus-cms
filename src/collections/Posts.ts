import type { CollectionConfig } from 'payload'
import { triggerDeploy } from '../hooks/triggerDeploy'

// Function to slugify text with proper UTF-8 handling
function slugify(text: string): string {
  return (
    text
      .toLowerCase()
      .trim()
      // Normalize Unicode characters (remove accents)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      // Replace spaces and special characters with hyphens
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      // Remove leading/trailing hyphens
      .replace(/^-+|-+$/g, '')
  )
}

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: 'Article',
    plural: 'Articles',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'publishedAt'],
    description: 'Gérez les articles du blog du site Atelier Nexus',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        placeholder: "Ex: Pourquoi faire appel à un studio d'aménagement intérieur",
        description:
          "Le titre principal de votre article - il sera aussi utilisé pour générer l'URL",
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        readOnly: true,
        description: 'Généré automatiquement à partir du titre (URL-friendly)',
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            // Always generate slug from title
            if (data.title) {
              data.slug = slugify(data.title)
            }
            return data
          },
        ],
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      admin: {
        placeholder:
          'Écrivez un court résumé (2-3 phrases) qui apparaîtra dans la liste des articles',
        description: "Résumé de l'article (180-200 caractères recommandé)",
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      admin: {
        description:
          "Le contenu complet de votre article - utilisez l'éditeur pour formater le texte, ajouter des images, des titres, etc.",
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description:
          "Image de couverture de l'article (s'affichera sur la liste et en haut de l'article)",
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      defaultValue: () => new Date().toISOString().split('T')[0],
      admin: {
        position: 'sidebar',
        description: "Date de publication de l'article",
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Brouillon', value: 'draft' },
        { label: 'Publié', value: 'published' },
      ],
      defaultValue: 'draft',
      required: true,
      admin: {
        position: 'sidebar',
        description: 'Brouillon = non visible sur le site | Publié = visible pour tous',
      },
    },
  ],
  hooks: {
    afterChange: [triggerDeploy],
    afterDelete: [triggerDeploy],
  },
}
