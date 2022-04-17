const timeToNow = (date) => {
  const created = new Date(date).getTime()
  const dates = Math.floor((Date.now() - created) / 1000 / 60 / 60 / 24)
  if (dates < 30) {
    return `${dates} ngày`
  } else {
    const months = Math.floor(dates / 30)
    if (months < 12) {
      return `${months} tháng`
    } else {
      const years = Math.floor(dates / 12)
      return `${years} năm`
    }
  }
}

export default timeToNow
