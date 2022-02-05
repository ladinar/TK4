import React from 'react'

//Products
const AllProducts = React.lazy(() => import('./views/products/all-products/AllProducts'))
const AddProducts = React.lazy(() => import('./views/products/add-products/AddProducts'))

const routes = [
  { path: '/products/all-products', name: 'Produk', component: AllProducts },
  { path: '/products/add-products', name: 'Tambah Produk', component: AddProducts },
]

export default routes
