import { Product } from '../Models/Product';

export function fetchProducts() {
  return fetch('/api/products/get', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  }).then(r => {
    return r.json();
  });
}

export function removeProduct(productName: string) {
  return fetch('/api/products/delete/' + productName, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  }).then(r => {
    return r.json();
  });
}

export function addProduct(product: Product) {
  return fetch('/api/products/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
    body: JSON.stringify(product)
  }).then(r => {
    return r.json();
  });
}