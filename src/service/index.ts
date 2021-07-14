// 正式环境调用service（实际开发请查看该部分代码）
import service from '../util/request'
// mock数据直接调用axios
import axios from 'axios'

const qs = require('qs')
const baseUrl = '/'

export default  {
  testo: async (params: Object) => {
    return await service.post(`${baseUrl}api/web/login/`, qs.stringify(params)).then(res => res).catch(err => err)
  },//post
  testt: async () => {
    return await service.get(`${baseUrl}api/web/login/`, qs.stringify()).then(res => res).catch(err => err)
  },//get
  login: async (params: Object) => {
    return await axios.get(`${baseUrl}login`, {params}).then(res => res).catch(err => err)
  },

  getOldList: async () => {
    return await service.get(`${baseUrl}api/oldpersons/`, qs.stringify()).then(res => res.data).catch(err => err)
  },

  postOldList: async (params: any) => {
    return await axios.post(`${baseUrl}oldpersons/`, qs.stringify(params)).then(res => res).catch(err => err)
  },

  putOldList: async (params: any) => {
    return await axios.put(`${baseUrl}admin`, { params }).then(res => res).catch(err => err)
  },

  deleteOldList: async (params: any) => {
    return await axios.delete(`${baseUrl}admin`, { params }).then(res => res).catch(err => err)
  },

  getStaffList: async (params: any) => {
    return await axios.get(`${baseUrl}Staff`, {params}).then(res => res.data).catch(err => err)
  },

  postStaffList: async (params: any) => {
    return await axios.post(`${baseUrl}Staff`, { params }).then(res => res).catch(err => err)
  },

  putStaffList: async (params: any) => {
    return await axios.put(`${baseUrl}Staff`, { params }).then(res => res).catch(err => err)
  },

  deleteStaffList: async (params: any) => {
    return await axios.delete(`${baseUrl}Staff`, { params }).then(res => res).catch(err => err)
  },

  getVolunteerList: async (params: any) => {
    return await axios.get(`${baseUrl}Volunteer`, {params}).then(res => res.data).catch(err => err)
  },

  postVolunteerList: async (params: any) => {
    return await axios.post(`${baseUrl}Volunteer`, { params }).then(res => res).catch(err => err)
  },

  putVolunteerList: async (params: any) => {
    return await axios.put(`${baseUrl}Volunteer`, { params }).then(res => res).catch(err => err)
  },

  deleteVolunteerList: async (params: any) => {
    return await axios.delete(`${baseUrl}Volunteer`, { params }).then(res => res).catch(err => err)
  }
}
