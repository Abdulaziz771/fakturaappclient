import axios from 'axios'

export default {
  state: {
    wholeMenuToggleButtonSidebar: true,
    secondMenuValue: false,
    currentSidebar: null,
    allNavigators: true,
    //posts: []
  },

  actions: {
    //   getPosts({commit}, limit = 3) {
    //    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=' + limit)
    //      .then(response => {
    //        const post = response.data;
    //        commit('updatePosts', post)
    //      })
    // }
  },

  getters: {
    //filternNewPosts(state) {
    //  return state.posts.filter(post => {
    //    return post.title && post.body
    //  })
    //},
    //postsCount(state, getters) {
    //  return getters.filternNewPosts.length
    //},
    iswholeMenuToggleButtonSidebar(state) {
      return state.wholeMenuToggleButtonSidebar
    },
    isvalueSecondSidebar(state) {
      return state.secondMenuValue
    },
    currentValueSidebar(state) {
      return state.currentSidebar
    },
    isnavigatorsVisivle(state) {
      return state.allNavigators
    },
  },

  mutations: {
    //updatePosts(state, posts) {
    //  state.posts = posts
    //},
    //createPost(state, newPost) {
    //  state.posts.unshift(newPost)
    //},
    setWholeMenuInSidebar(state, value) {
      state.wholeMenuToggleButtonSidebar = value;
    },
    toggleAllNavigators(state, value) {
      state.allNavigators = value;
    },
    toggleSecondSidebar(state, value) {
      state.secondMenuValue = value;
    },
    openCurrentSidebar(state, value) {
      state.currentSidebar = value;
    },
    toggleSidebar(state) {
      state.secondMenuValue = !state.secondMenuValue;
    },
  },
}
