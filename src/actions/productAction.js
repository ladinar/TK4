import axios from 'axios'
import { GET_PRODUCTS_LIST, GET_PRODUCTS_ERROR } from '../types'

// export const GET_PRODUCTS_LIST = 'GET_PRODUCTS_LIST'

// export const getProductsList = () => {
//   return (dispatch) => {
//     axios
//       .get('http://my-json-server.typicode.com/RizalChamad/reactjs-redux/products')
//       .then(function (res) {
//         let result = res.data
//         dispatch({
//           type: GET_PRODUCTS_LIST,
//           payload: {
//             data: result,
//             errorMessage: false,
//           },
//         })
//       })
//   }
// }
export const getProductAction = () => async (dispatch) => {
  try {
    const res = await axios.get(
      'http://my-json-server.typicode.com/RizalChamad/reactjs-redux/products',
    )
    dispatch({
      type: GET_PRODUCTS_LIST,
      payload: res.data,
    })
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_ERROR,
      payload: console.log(error),
    })
  }
}
