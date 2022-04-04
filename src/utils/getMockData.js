export const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'Iphone 13 Pro Max ',
    price: 20000000,
    oldPrice: 30000000,
    imageUrl: 'assets/images/1.jpg',
  },
  {
    id: 2,
    name: 'Iphone 14 Pro Max ',
    price: 30000000,
    oldPrice: 35000000,
    imageUrl: 'assets/images/2.jpg',
  },
  {
    id: 3,
    name: 'Iphone 15 Pro Max ',
    price: 400000000,
    oldPrice: 50000000,
    imageUrl: 'assets/images/3.jpg',
  },
  {
    id: 4,
    name: 'Iphone 16 Pro Max ',
    price: 40000000,
    oldPrice: 420000000,
    imageUrl: 'assets/images/4.jpg',
  },
  {
    id: 5,
    name: 'Iphone 17 Pro Max ',
    price: 15000000,
    oldPrice: 230000000,
    imageUrl: 'assets/images/5.jpg',
  },
]

export const getRandomProduct = () => {
  const productCount = MOCK_PRODUCTS.length

  const randomIndex = Math.round(Math.random() * (productCount - 1))

  return MOCK_PRODUCTS[randomIndex]
}

export const getProductWithId = (id) => {
  return MOCK_PRODUCTS.find((product) => product.id.toString() === id)
}
