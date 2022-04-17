const numberSeparator = (x, separator = '.') => {
  if (x == null) return 0
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
}

export default numberSeparator
