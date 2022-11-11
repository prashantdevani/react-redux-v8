import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../modules/Products/productSlice'
import todoSlice from '../modules/Todo/todoSlice'
import usersSlice from '../modules/Users/usersSlice'


export default configureStore({
  reducer: {
    todo: todoSlice,
    users: usersSlice,
    products: productSlice
  },
})