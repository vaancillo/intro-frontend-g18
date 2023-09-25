import { getApiURL } from '../config'

export const fetcher = async ({ url = '', options = {} }) => {
  const response = await fetch(url, options)
  return response.ok && response.json()
}

export const getCountries = async () => {
  const allData = getApiURL('/all')
  return await fetcher({ url: allData, options: { method: 'GET' } })
}

export const getCountry = async (id) => {
  const item = getApiURL(`/alpha${id}`)
  return await fetcher({ url: item, options: { method: 'GET' } })
}
