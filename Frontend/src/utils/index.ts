export const generateUUID = () => crypto.randomUUID()

export const isURL = (str: string) =>
  new RegExp(`^https?:\/\/.+`, 'i').test(str)

export const normalizeKey = (str: string) => {
  return str
    .replaceAll(/[A-Z]/g, (match) => `_${match}`)
    .split('_')
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}

export const getFormattedDate = (date: number | string) => {
  const actualDate = new Date(date)
  const day = actualDate.getDate()
  const month = actualDate.getMonth() + 1
  const year = actualDate.getFullYear()
  return `${year}-${month}-${day}`
}

export const getFormattedPrice = (price: number) => {
  return price.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
  })
}
