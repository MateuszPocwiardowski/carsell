import { useState } from 'react'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

type useFetchProps = {
	url: string
	method: HttpMethod
	body?: object
}

const useFetch = () => {
	const [data, setData] = useState<any>(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<any>(null)

	const fetchData = async ({ url, method, body }: useFetchProps) => {
		setIsLoading(true)
		try {
			const response = await fetch(url, {
				method,
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(body),
			})

			const responseData = await response.json()
			setData(responseData)
			setIsLoading(false)
		} catch (error) {
			setError(error)
			setIsLoading(false)
		}
	}

	return { data, isLoading, error, fetchData }
}

export default useFetch
