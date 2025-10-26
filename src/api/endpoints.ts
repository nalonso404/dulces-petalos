const JAKALA_API = `${process.env.JAKALA_API}`

if (!process.env.JAKALA_API) {
  throw new Error('❌ Missing JAKALA_API in environment variables')
}

export const endpoints = {
  'products': () => `${JAKALA_API}/product`,
  'product': (query) => `${JAKALA_API}/product/${query.id}`,
}
