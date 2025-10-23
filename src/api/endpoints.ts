const JAKALA_API = `${process.env.JAKALA_API}`

export const endpoints = {
  'products': () => `${JAKALA_API}/product`,
  'product': (query) => `${JAKALA_API}/product/${query.id}`,
}
