const query2string = (query) => {
  return Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')
}

export default query2string
