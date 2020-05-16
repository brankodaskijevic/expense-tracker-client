import store from "../store/store";
import { setGeneralData } from "../components/landing/landing_slice";
import { setPosts, setPostLike } from "../components/main/main_slice";
import axios from 'axios'
import * as Cookie from 'es-cookie'
import { loadFile } from '../utils/imagehelper'
import { getUser } from "../components/profile/profile_slice";
import { setTransactions } from "../components/transactions-table/transaction_slice";
import { setUsersPosts } from "../components/post/userPosts_slice";

export const getGeneralInfo = async () => {
  const response = await axios({
    method: 'GET',
    url: '/api/v1/users/general_info'
  });

  const resObject = response.data

  store.dispatch(setGeneralData(resObject))

  return resObject
}

export const login = async (formData) => {
  console.log('login')
  const response = await axios({
    method: 'POST',
    url: '/api/v1/auth/login',
    data: formData,
  });

  console.log('response', response)

  const token = response.data.token

  Cookie.set('token', token)
}

export const register = async (formData) => {
  const response = await axios({
    method: 'POST',
    url: '/api/v1/users',
    data: formData
  })

  const token = response.data.token

  Cookie.set('token', token)
}

export const getAllPosts = async () => {
  const response = await axios({
    method: 'GET',
    url: '/api/v1/post/all'
  });

  const resObject = response.data

  console.log(resObject)

  store.dispatch(setPosts(resObject))

  return resObject
}

export const postPost = async (formData) => {
  const token = Cookie.get('token')

  console.log('token', token)

  const response = await axios({
    method: 'POST',
    url: '/api/v1/post',
    data: formData,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  const resObject = response.data

  return resObject
}

export const getLoggedUser = async () => {
  const token = Cookie.get('token')

  const response = await axios({
    method: 'GET',
    url: '/api/v1/users',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  const resObject = response.data.user
  store.dispatch(getUser(resObject))

  return resObject
}

export const getUsersTransaction = async () => {
  const token = Cookie.get('token')

  const response = await axios({
    method: 'GET',
    url: '/api/v1/transaction',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  const resObject = response.data.transactions
  store.dispatch(setTransactions(resObject))

  return resObject
}

export const postTransaction = async (formData) => {
  const token = Cookie.get('token')

  const response = await axios({
    method: 'POST',
    url: '/api/v1/transaction',
    data: formData,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  const resObject = response.data

  return resObject
}

export const usersPosts = async () => {
  const token = Cookie.get('token')

  const response = await axios({
    method: 'GET',
    url: '/api/v1/post',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  const resObject = response.data.data
  store.dispatch(setUsersPosts(resObject))

  return resObject
}

export const updateUser = async (formData) => {
  const token = Cookie.get('token')

  const response = await axios({
    method: 'PATCH',
    url: '/api/v1/users',
    data: formData,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  const resObject = response.data

  return resObject
}

export const updateUserAvatar = async (formData) => {
  const token = Cookie.get('token')

  const response = await axios({
    method: 'PATCH',
    url: '/api/v1/users/avatar',
    data: formData,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  const resObject = response.data

  return resObject
}

export const udpatePassword = async (formData) => {
  const token = Cookie.get('token')

  const response = await axios({
    method: 'PATCH',
    url: '/api/v1/users/password',
    data: formData,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  const resObject = response.data

  return resObject
}

export const likePost = async (postId) => {
  const token = Cookie.get('token')

  const response = await axios({
    method: 'POST',
    url: `/api/v1/post/like/${postId}`,
    headers: {
      'Authorization': `Bearer ${token}`
    },
  })

  console.log(response.data)

  store.dispatch(setPostLike({
    postId,
    likes: response.data.data
  }))
}