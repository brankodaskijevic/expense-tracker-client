import store from "../store/store";
import { setGeneralData } from "../components/landing/landing_slice";
import axios from 'axios'
import * as Cookie from 'es-cookie'

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
    url: 'api/v1/users',
    data: 
  })

  const token = response.data.token

  Cookie.set('token', token)
}