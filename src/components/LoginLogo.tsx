import React from 'react'

export default function LoginLogo() {
  return (
    <div className="flex justify-center items-center w-full py-6">
      <img
        src="/images/webp/ateliernexusLogo.webp"
        alt="Atelier Nexus"
        width={200}
        height={200}
        style={{
          width: '200px',
          height: 'auto',
          maxWidth: '100%',
        }}
      />
    </div>
  )
}
