import { TypefetchMethod, TypeFetchOptions } from '@/schema/fetch'
import { endpoints } from './endpoints'

const defaultOptions: TypeFetchOptions = {
  method: 'GET',
  mode: 'cors',
  cache: 'default',
  credentials: 'same-origin',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
  body: null
}


export const fetchMethod: TypefetchMethod = async ( endpointName, query = {}, fetchOptions?: TypeFetchOptions) => {
  if (!endpointName || !endpoints[endpointName]) {
    throw new Error(`api/endpoints.ts -> No endpoint with namespace: '${endpointName}'`)
  }

  const options = { ...defaultOptions, ...fetchOptions }
  const url = endpoints[endpointName](query)
  const body = options.body ?? null
  
  const { next, ...rest } = options

  const fetchConfig: RequestInit & { next?: { revalidate?: number } } = { ...rest, body }
  if (next && typeof window === 'undefined') {
    (fetchConfig as any).next = next
    console.log('✅ Revalidate reenviado a fetch:', next)
  } else {
    console.log('⚠️ No se reenvía revalidate, entorno cliente o undefined')
  }

  const res: Response = await fetch(url, fetchConfig)

  switch (res.status) {
    case 204:
      return res
    case 201:
    case 200:
      if (typeof window === 'undefined') return res
      return res
    case 401:
      console.info('👮🏻‍♂️⛔️ Unauthorized')
      return res
    case 404:
      console.log(`404 (Not found) for endpoint: ${endpointName}`)
      return res
    case 422:
      console.log(`422 (Unprocessable Entity) for endpoint: ${endpointName}`)
      return res
    case 500:
      throw new Error(`500 - Some server error to check for endpoint: ${endpointName}`)
    default:
      throw new Error(`${res.status} - Something went wrong with the fetch`)
  }
}