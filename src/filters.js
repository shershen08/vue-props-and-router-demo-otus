export const timeParser = (value) => {
  if (!value) return ''
  const seconds = value / 1000
  const mins = parseInt(seconds / 60)

  return mins ? `${mins} : ${(value - mins * 60)}` : `${seconds}`
}
