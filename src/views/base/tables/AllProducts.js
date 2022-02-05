import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const AllProducts = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>list Data Produk</strong>
          </CCardHeader>
          <CCardBody>
            <CCol>
              <CButton color="primary" size="lg">
                Tambah Produk
              </CButton>
            </CCol>
          </CCardBody>
          <CCardBody>
            <CTable striped>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">No</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nama Produk</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Harga Beli</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Harga Jual</CTableHeaderCell>
                  <CTableHeaderCell scope="col"></CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>Mark</CTableDataCell>
                  <CTableDataCell>Otto</CTableDataCell>
                  <CTableDataCell>@mdo</CTableDataCell>
                  <CTableDataCell>
                    <CRow>
                      <CCol xs>
                        <CButton color="success" variant="outline">
                          Edit
                        </CButton>
                      </CCol>
                      <CCol xs>
                        <CButton color="danger" variant="outline">
                          Delete
                        </CButton>
                      </CCol>
                    </CRow>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">2</CTableHeaderCell>
                  <CTableDataCell>Jacob</CTableDataCell>
                  <CTableDataCell>Thornton</CTableDataCell>
                  <CTableDataCell>Thornton</CTableDataCell>
                  <CTableDataCell>
                    <CRow>
                      <CCol xs>
                        <CButton color="success" variant="outline">
                          Edit
                        </CButton>
                      </CCol>
                      <CCol xs>
                        <CButton color="danger" variant="outline">
                          Delete
                        </CButton>
                      </CCol>
                    </CRow>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">3</CTableHeaderCell>
                  <CTableDataCell>Larry the Bird</CTableDataCell>
                  <CTableDataCell>Larry the Bird</CTableDataCell>
                  <CTableDataCell>@twitter</CTableDataCell>
                  <CTableDataCell>
                    <CRow>
                      <CCol xs>
                        <CButton color="success" variant="outline">
                          Edit
                        </CButton>
                      </CCol>
                      <CCol xs>
                        <CButton color="danger" variant="outline">
                          Delete
                        </CButton>
                      </CCol>
                    </CRow>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AllProducts
