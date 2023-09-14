import { useEffect, useState } from 'react'

function useGetData (apiUrl) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { signal, abort } = new AbortController()

  const getData = async () => {
    try {
      const req = await fetch(apiUrl, { signal })
      const res = await req.json()
      res.status === 200 && setData(res)
      res.status === 404 && setError(String(error))
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
