import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { fetcher } from '../services/fetcher'

function useGetData (url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  // const { signal, abort } = new AbortController()

  const getData = async () => {
    try {
      const req = await fetcher({ url })
      setData(req)
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
  }, [url])

  return { data, loading, error }
}

export default useGetData
