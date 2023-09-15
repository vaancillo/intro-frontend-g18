import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function useGetData (apiUrl) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  // const { signal, abort } = new AbortController()

  const getData = async () => {
    try {
      const req = await fetch(apiUrl)
      const res = await req.json()
      setData(res)
    } catch (error) {
      setError(String(error))
      toast.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
    // return () => abort()
  }, [apiUrl])

  return { data, loading, error }
}

export default useGetData
