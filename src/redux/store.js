import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../modules/Todo/productSlice'
import todoSlice from '../modules/Todo/todoSlice'


export default configureStore({
  reducer: {
    todo: todoSlice,
    products: productSlice
  },
})