import React, { useEffect, useState } from 'react'
import axios from 'lib/axios'
import type { AxiosRequestConfig } from 'axios'

/**
 * Used to handle get fetch request
 * @param config axios config
 * @param dependency update dependency
 */
export function useFetch(config: AxiosRequestConfig, dependency?: React.DependencyList) {
  const [data, setData] = useState<any[]>([])
  const [error, setError] = useState<any>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    axios(config)
      .then((res) => {
        setData(res.data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error.response.data)
      })
  }, dependency ?? [])

  return { data, loading, error }
}
