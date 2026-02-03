import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const adminRoute = payloadConfig?.routes?.admin || '/admin'

  return (
    <div className="home">
      <div className="content">
        <picture>
          <source srcSet="/images/webp/logo-nx-white.webp" />
          <img alt="Atelier Nexus" height={65} src="/images/webp/logo-nx-white.webp" width={65} />
        </picture>
        {!user && <h1>Bienvenue dans votre CMS Atelier Nexus</h1>}
        {user && <h1>Bienvenue {user.email}</h1>}
        <div className="links">
          <a className="admin" href={adminRoute} rel="noopener noreferrer" target="_blank">
            Accéder au panneau d&apos;administration
          </a>
        </div>
      </div>
    </div>
  )
}
