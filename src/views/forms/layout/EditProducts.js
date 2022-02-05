import { React, useState } from 'react'
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

const CustomStyles = () => {
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
      onSubmit={handleSubmit}
    >
      <CCol md={12}>
        <CFormLabel htmlFor="validationProductName">Nama Produk</CFormLabel>
        <CFormInput type="text" id="validationProductName" required />
        <CFormFeedback invalid>Isi terlebih dahulu nama produk!</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationBuyingPrice">Harga Beli</CFormLabel>
        <CFormInput type="text" id="validationBuyingPrice" required />
        <CFormFeedback invalid>Isi terlebih dahulu harga jual!</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationSellingPrice">Harga Jual</CFormLabel>
        <CFormInput type="text" id="validationSellingPrice" required />
        <CFormFeedback invalid>Isi terlebih dahulu harga jual!</CFormFeedback>
      </CCol>
      <CCol md={12}>
        <CFormLabel htmlFor="validationDescription">Deskripsi Produk</CFormLabel>
        <CFormTextarea
          id="validationDescription"
          placeholder="Isi deskripsi produk yang akan ditambahkan"
          required
        ></CFormTextarea>
        <CFormFeedback invalid>Please enter a message in the textarea!</CFormFeedback>
      </CCol>
      <CCol md={12}>
        <CFormLabel htmlFor="validationFile">Upload Gambar Produk</CFormLabel>
        <CFormInput type="file" id="validationFile" aria-label="file example" required />
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
  )
}

export default EditProducts
