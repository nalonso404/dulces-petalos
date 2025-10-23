import { endpoints } from '@/api/endpoints'

export type TypeFetchOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' 
  mode?: 'cors' | 'no-cors' | 'same-origin', 
  cache?: 'default' | 'no-cache' | 'no-store' | 'reload' | 'force-cache' | 'only-if-cached', 
  credentials?: 'same-origin' | 'include' | 'omit',
  headers?: {
    'Accept'?: 'application/json' | 'application/pdf' | 'application/xml' | 'application/csv' | 'application/vnd.ms-excel',
    'Content-Type'?: 'application/json' | 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'
    [key: string]: any
  },
  redirect?: 'follow' | 'manual' | 'error', 
  referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url' 
  body?: any 
}

export type TypeQuery = {
  id?: string | number
}

export type TypefetchMethod = (urlNamespace: keyof typeof endpoints, query?: TypeQuery, options?: TypeFetchOptions) => Promise<Response | Blob>
