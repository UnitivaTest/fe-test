import axios from 'axios';

export interface Product {
  UPC: number
  name: string
  price: {
    current: {
      value: number
    }
  }
  aviability: {
    stock: number
  }
  variants: Variant[]
}

interface Variant {
  UPC: number
  name: string
  price: {
    current: {
      value: number
    }
  }
}

export const getProducts = () => axios.get<Product[]>('http://fe-test.unitiva.it/products/products.json')

