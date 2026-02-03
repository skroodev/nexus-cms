import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@/payload.config'

const seed = async () => {
  const payload = await getPayload({ config })

  try {
    // Vérifier si un admin existe déjà
    const existingAdmin = await payload.find({
      collection: 'users',
      where: {
        email: { equals: 'admin-nexus@atelier-nexus.local' },
      },
    })

    if (existingAdmin.docs.length > 0) {
      console.log('✅ Admin user already exists')
      process.exit(0)
    }

    // Créer l'utilisateur admin
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin-nexus@atelier-nexus.local',
        password: 'nexus',
      },
    })

    console.log('✅ Admin user created successfully')
    console.log('📧 Email: admin-nexus@atelier-nexus.local')
    console.log('🔐 Password: nexus')
    process.exit(0)
  } catch (error) {
    console.error('❌ Error creating admin user:', error)
    process.exit(1)
  }
}

seed()
