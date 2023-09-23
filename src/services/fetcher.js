export const fetcher = async ({ url = '', options = {} }) => {
  const response = await fetch(url, options)
  return response.ok && response.json()
}
