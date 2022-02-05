import { React, useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const CustomStyles = () => {
  const [nama, setNama] = useState('')
  const [hbeli, setHBeli] = useState('')
  const [hjual, setHJual] = useState('')
  const [deskripsi, setDesripsi] = useState('')
  const [img, setImage] = useState('')
  const history = useHistory()

  const saveProduct = async (e) => {
    e.preventDefault()
    await axios.post('http://my-json-server.typicode.com/RizalChamad/reactjs-redux/products', {
      productName: nama,
      buyingPrice: hbeli,
      sellingPrice: hjual,
      descProduct: deskripsi,
      image: img,
    })
    history.push('/products')
  }
  const currentLocation = useLocation().pathname
  const id = parseInt(currentLocation.slice(-1), 10)
  console.log(currentLocation)
  console.log(id)
  const [product, setProduct] = useState([])
  useEffect(() => {
    getProductDetail()
  }, [])

  const getProductDetail = async () => {
    const response = await axios.get(
      'http://my-json-server.typicode.com/RizalChamad/reactjs-redux/products/' + id,
    )
    setProduct(response.data)
    setNama(product.productName)
    setHBeli(product.buyingPrice)
    setHJual(product.sellingPrice)
    setDesripsi(product.descProduct)
    setImage(product.image)
  }

  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={saveProduct}
    >
      <CCol md={12}>
        <CFormLabel htmlFor="validationProductName">Nama Produk</CFormLabel>
        <CFormInput
          type="text"
          id="validationProductName"
          onChange={(e) => setNama(e.target.value)}
          required
        />
        <CFormFeedback invalid>Isi terlebih dahulu nama produk!</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationBuyingPrice">Harga Beli</CFormLabel>
        <CFormInput
          type="text"
          id="validationBuyingPrice"
          onChange={(e) => setHBeli(e.target.value)}
          required
        />
        <CFormFeedback invalid>Isi terlebih dahulu harga jual!</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationSellingPrice">Harga Jual</CFormLabel>
        <CFormInput
          type="text"
          id="validationSellingPrice"
          onChange={(e) => setHJual(e.target.value)}
          required
        />
        <CFormFeedback invalid>Isi terlebih dahulu harga jual!</CFormFeedback>
      </CCol>
      <CCol md={12}>
        <CFormLabel htmlFor="validationDescription">Deskripsi Produk</CFormLabel>
        <CFormTextarea
          id="validationDescription"
          placeholder="Isi deskripsi produk yang akan ditambahkan"
          onChange={(e) => setDesripsi(e.target.value)}
          required
        ></CFormTextarea>
        <CFormFeedback invalid>Please enter a message in the textarea!</CFormFeedback>
      </CCol>
      <CCol md={12}>
        <CFormLabel htmlFor="validationFile">Upload Gambar Produk</CFormLabel>
        <CFormInput
          type="file"
          id="validationFile"
          aria-label="file example"
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <CFormFeedback invalid>File belum ditambahkan</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}

const EditProducts = () => {
  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Edit Produk</strong>
            </CCardHeader>
            <CCardBody>{CustomStyles()}</CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default EditProducts
