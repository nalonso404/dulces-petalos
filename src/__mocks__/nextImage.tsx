export default function MockImage(props: any) {
  const {
    fill,
    priority,
    loader,
    quality,
    placeholder,
    blurDataURL,
    ...rest
  } = props

  // eslint-disable-next-line @next/next/no-img-element
  return <img {...rest} />
}
