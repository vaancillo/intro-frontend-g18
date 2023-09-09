import { useEffect, useState } from 'react'

function useGetData (apiUrl) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { signal, abort } = new AbortController()

  const getData = async () => {
    try {
      const req = await fetch(apiUrl, { signal })
      const res = await req.json()
      setData(res)
    } catch (error) {
      setError(String(error))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
    return () => abort()
  }, [apiUrl])

  return { data, loading, error }
}

export default useGetData
