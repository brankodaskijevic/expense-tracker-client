import store from "../store/store";
import { setGeneralData } from "../components/landing/landing_slice";
import axios from 'axios'

export const getGeneralInfo = async () => {
  const response = await axios({
    method: 'GET',
    url: '/api/v1/users/general_info'
  });

  const resObject = response.data

  store.dispatch(setGeneralData(resObject))

  return resObject
}