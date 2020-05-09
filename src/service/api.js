import store from "../store/store";
import { setGeneralData } from "../components/landing/landing_slice";
import { setPosts } from "../components/main/main_slice";
import axios from 'axios'
import * as Cookie from 'es-cookie'
import { loadFile } from '../utils/imagehelper'

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
  const response = await axios({
    method: 'POST',
    url: '/api/v1/auth/login',
    data: formData,
  });

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