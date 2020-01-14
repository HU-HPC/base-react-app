import React, { useState, useEffect } from "react"

const useServiceCall = ({ func, loading, error }) => {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(loading)
	const [_error, setError] = useState(null)
	useEffect(() => {
		setIsLoading(true)
		try {
			const res = func()
			setData(res)
		} catch (e) {
			setError(e)
		}
		setIsLoading(false)
	}, [])
	return { data, isLoading, error }
}

export default useServiceCall
