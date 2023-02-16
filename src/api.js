import Vue from 'vue'
import axios from 'axios'


const client = axios.create({
  baseURL: 'http://localhost:8081/',
  json: true
})

Vue.prototype.$http = client ;



export default {
    async execute (method, resource, data, id, topic) {
    
        return client({
          method,
          url: resource,
          data,
          topic,
          id,
          headers: {
      
           }
        }).then(req => {
          return req.data
        })
      },
    getPoints (url) {
    return this.execute('get', '/points')
  },
  createPoint (data) {
   return this.execute('post', '/points', data)
  },
  CalcPoint(data){
    return this.execute('post', '/points', data)
  },
  updatePoint (id, data) {
    return this.execute('put', `/points'/${id}`, data)
  },
  deletePoint (id) {
    return this.execute('delete', `/points/${id}`)
  },
  getClusters (url) {
    return this.execute('get', '/clusters')
  },
  createCluster (data) {
   return this.execute('post', '/clusters', data)
  },
  getRhY (url) {
    return this.execute('get', '/Rhythms')
  },
  createRhY (data) {
   return this.execute('post', '/Rhythms', data)
  },
  deleteRhY (id) {
    return this.execute('delete', `/Rhythms/${id}`)
  },
  updateRHY (id, data) {
    return this.execute('put', `/Rhythms/${id}`, data)
  },
}