export const triggerDeploy = async ({ req }: any) => {
  const url = process.env.CLOUDFLARE_PAGES_DEPLOY_HOOK_URL
  if (!url) {
    req.payload.logger.info('No deploy hook URL configured')
    return
  }

  try {
    const response = await fetch(url, { method: 'POST' })
    if (!response.ok) {
      req.payload.logger.error(`Deploy hook failed with status ${response.status}`)
    } else {
      req.payload.logger.info('Cloudflare Pages deploy hook triggered successfully')
    }
  } catch (error) {
    req.payload.logger.error(`Cloudflare deploy hook failed: ${String(error)}`)
  }
}
