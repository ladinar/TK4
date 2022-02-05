import React from 'react'
import { lazy } from 'react'

//Products
const AllProducts = React.lazy(() => import('./views/products/all-products/AllProducts'))
const EditProducts = React.lazy(() => import('./views/products/edit-products/EditProducts'))
const AddProducts = React.lazy(() => import('./views/products/add-products/AddProducts'))

const routes = [
  { path: '/products/all-products', name: 'Produk', component: AllProducts },
  { path: '/products/edit-products/:id', name: 'Edit Produk', component: EditProducts },
  { path: '/products/add-products', name: 'Tambah Produk', component: AddProducts },
]

export default routes
