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
    return await service.get(`${baseUrl}api/oldpersons/`, qs.stringify()).then(res => res).catch(err => err)
  },

  postOldList: async (params: any) => {
    return await service.post(`${baseUrl}api/oldpersons/`, qs.stringify(params)).then(res => res).catch(err => err)
  },

  putOldList: async (params: any,id) => {
    return await service.put(`${baseUrl}api/oldpersons/${id}/`, qs.stringify(params)).then(res => res).catch(err => err)
  },

  deleteOldList: async (id: any) => {
    return await service.delete(`${baseUrl}api/oldpersons/${id}/`, qs.stringify()).then(res => res).catch(err => err)
  },

  getStaffList: async () => {
    return await service.get(`${baseUrl}api/employees/`, qs.stringify()).then(res => res.data).catch(err => err)
  },

  postStaffList: async (params: any) => {
    return await service.post(`${baseUrl}api/employees/`, qs.stringify(params)).then(res => res).catch(err => err)
  },

  putStaffList: async (params: any) => {
    return await service.put(`${baseUrl}Staff/`, { params }).then(res => res).catch(err => err)
  },

  deleteStaffList: async (params: any) => {
    return await service.delete(`${baseUrl}Staff/`, { params }).then(res => res).catch(err => err)
  },

  getVolunteerList: async () => {
    return await service.get(`${baseUrl}api/volunteers/`, qs.stringify()).then(res => res).catch(err => err)
  },

  postVolunteerList: async (params: any) => {
    return await service.post(`${baseUrl}api/volunteers/`, qs.stringify(params)).then(res => res).catch(err => err)
  },

  putVolunteerList: async (params: any, id) => {
    return await service.put(`${baseUrl}api/volunteers/${id}/`, qs.stringify(params)).then(res => res).catch(err => err)
  },

  deleteVolunteerList: async (id) => {
    return await service.delete(`${baseUrl}api/volunteers/${id}/`, qs.stringify()).then(res => res).catch(err => err)
  }
}
