# Guide – Comment Créer un Article Blog

Bienvenue dans l'administration du CMS Payload pour Atelier Nexus.

## 📝 Créer un Article

### Accès à l'Admin
1. Ouvrir `http://localhost:3000/admin` (en développement)
2. Se connecter avec vos identifiants

### Créer un Nouvel Article
1. Cliquer sur **Posts** dans le menu de gauche
2. Cliquer sur le bouton **+ Create** (ou **Create** en haut à droite)

### Remplir les Champs

#### Champs Obligatoires
- **Title** : Le titre de l'article
- **Slug** : L'URL de l'article (ex: `mon-premier-article`)
  - ⚠️ **Doit être unique** et contenir uniquement des lettres, chiffres et tirets
- **Content** : Le contenu de l'article (éditeur rich text)
- **Status** : Sélectionner **Publié** pour que l'article soit visible

#### Champs Optionnels
- **Excerpt** : Un court résumé de l'article (s'affiche dans la liste)
- **Cover Image** : Image de couverture de l'article

#### Date de Publication
- **Published At** : Date de publication (défaut: aujourd'hui)

### Enregistrer l'Article
1. Remplir tous les champs
2. Cliquer sur le bouton **Publish** (ou **Save** pour le brouillon)
3. ✅ Article créé !

---

## 🔍 Consulter les Articles

### Liste des Articles
- Cliquer sur **Posts** dans le menu de gauche
- Voir tous les articles avec leur statut

### Éditer un Article
- Cliquer sur un article dans la liste
- Modifier les champs
- Cliquer sur **Publish** pour enregistrer

### Supprimer un Article
- Cliquer sur un article
- Cliquer sur le bouton **Delete** (⚠️ irréversible)

---

## 🌐 Voir les Articles sur le Site

Une fois l'article **Publié** :

1. Ouvrir `http://localhost:3001/blog` (site en développement)
2. L'article devrait apparaître dans la liste
3. Cliquer sur l'article pour voir le détail

**En production** : Les articles seront publiés sur votre domaine (ex: `https://atelier-nexus.com/blog`).

---

## 💡 Conseils

- 🔤 **Slug** : Utiliser des mots-clés pertinents (ex: `conseils-decoration-interieur`)
- 📸 **Image** : Utiliser une image de bonne qualité (recommandé: 1200×630px)
- ✍️ **Contenu** : Utiliser l'éditeur rich text pour formater le texte (gras, listes, etc.)
- 📅 **Date** : La date de publication s'affiche sur le site
- 📊 **Extrait** : Rédigez un extrait accrocheur (max. 160 caractères)

---

## 🚀 Déploiement Automatique

Dès qu'un article est **créé**, **modifié** ou **supprimé** :

1. Payload CMS notifie Cloudflare Pages
2. Cloudflare Pages redéploie automatiquement le site
3. Votre article est en ligne ! 🎉

*(Cela peut prendre 1-2 minutes)*

---

## ❓ Questions

Pour toute question, consulter la documentation Payload :
https://payloadcms.com/docs

---

**Date** : 3 février 2026  
**CMS** : Payload v3.74.0
