// 正式环境调用service（实际开发请查看该部分代码）
import service from '../util/request'
// mock数据直接调用axios
import axios from 'axios'

const qs = require('qs')
const baseUrl = '/'

export default  {
  testo: async (params: Object) => {
    return await service.post(`${baseUrl}api/web/login/`, qs.stringify(params)).then(res => res).catch(err => err)
  },
  testt: async () => {
    return await service.get(`${baseUrl}api/web/login/`, qs.stringify()).then(res => res).catch(err => err)
  },
  login: async (params: Object) => {
    return await axios.get(`${baseUrl}login`, {params}).then(res => res).catch(err => err)
  },

  getAdminList: async (params: any) => {
    return await axios.get(`${baseUrl}admin`, {params}).then(res => res.data).catch(err => err)
  },

  postAdminList: async (params: any) => {
    return await axios.post(`${baseUrl}admin`, { params }).then(res => res).catch(err => err)
  },

  putAdminList: async (params: any) => {
    return await axios.put(`${baseUrl}admin`, { params }).then(res => res).catch(err => err)
  },

  deleteAdminList: async (params: any) => {
    return await axios.delete(`${baseUrl}admin`, { params }).then(res => res).catch(err => err)
  },

  getPersonnelOldList: async (params: any) => {
    return await axios.get(`${baseUrl}PersonnelOld`, {params}).then(res => res.data).catch(err => err)
  },

  postPersonnelOldList: async (params: any) => {
    return await axios.post(`${baseUrl}PersonnelOld`, { params }).then(res => res).catch(err => err)
  },

  putPersonnelOldList: async (params: any) => {
    return await axios.put(`${baseUrl}PersonnelOld`, { params }).then(res => res).catch(err => err)
  },

  deletePersonnelOldList: async (params: any) => {
    return await axios.delete(`${baseUrl}PersonnelOld`, { params }).then(res => res).catch(err => err)
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
