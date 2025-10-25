
export default function MockImage(props: any) {
  const { fill, ...rest } = props
  // eslint-disable-next-line @next/next/no-img-element
  return <img {...rest} />
}