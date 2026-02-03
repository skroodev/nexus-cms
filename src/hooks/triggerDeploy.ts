export const triggerDeploy = async ({ req }: any) => {
  const url = process.env.CLOUDFLARE_PAGES_DEPLOY_HOOK_URL
  if (!url) {
    req.payload.logger.info('No deploy hook URL configured')
    return
  }

  try {
    req.payload.logger.info(`Triggering Cloudflare Pages deploy hook: ${url}`)

    const response = await fetch(url, { method: 'POST' })

    let body = ''
    try {
      body = await response.text()
    } catch (e) {
      body = String(e)
    }

    if (!response.ok) {
      req.payload.logger.error(`Deploy hook failed with status ${response.status} - body: ${body}`)
    } else {
      req.payload.logger.info(
        `Cloudflare Pages deploy hook triggered successfully - status ${response.status} - body: ${body}`,
      )
    }
  } catch (error) {
    req.payload.logger.error(`Cloudflare deploy hook failed: ${String(error)}`)
  }
}
