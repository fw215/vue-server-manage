import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    message: 'hogehoge',
    items: [
      {id: 1, title: 'title', description: 'description'},
      {id: 2, title: 'title', description: 'description'},
      {id: 3, title: 'title', description: 'description'},
      {id: 4, title: 'title', description: 'description'},
      {id: 5, title: 'title', description: 'descriptiondescriptiondescriptiondescription'},
      {id: 6, title: 'title', description: 'description'},
      {id: 7, title: 'title7', description: 'description'},
      {id: 8, title: 'title8title8title8title8', description: 'description'}
    ]
  }
  // mutations: {
  //   setMessage (state, payload) {
  //     state.message = payload
  //   }
  // },
  // getters: {
  //   message (state) {
  //     return state.message
  //   }
  // }
})

export default store
