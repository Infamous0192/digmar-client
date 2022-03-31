import React, { useState } from 'react'

type Error = { [key: string]: string }

export function useForm<T = any>(defaultValue: any = {}) {
  const [values, setValues] = useState<T>(defaultValue)
  const [errors, setErrors] = useState<Error>({})

  const handleChange = (e: React.ChangeEvent<any>) => {
    setErrors({ ...errors, [e.target.name]: '' })
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  function useSubmit(callback: () => void): React.FormEventHandler<HTMLFormElement> {
    return (e) => {
      e.preventDefault()
      callback()
    }
  }

  return { values, setValues, handleChange, errors, setErrors, useSubmit }
}
