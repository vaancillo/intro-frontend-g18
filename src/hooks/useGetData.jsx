import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { fetcher } from '../services/fetcher'

function useGetData (url) {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const getData = async () => {
    try {
      const req = await fetcher({ url })
      setData(req)
      setFilteredData(req)
    } catch (error) {
      setError(String(error))
      toast.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [url])

  return { data, filteredData, loading, error }
}

export default useGetData
