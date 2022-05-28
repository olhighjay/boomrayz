import { createStore } from 'vuex';

export default createStore({
  state: {
    authModalShow: false,
    userLoggedIn: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
    toggleAuth: (state) => {
      state.userLoggedIn = !state.userLoggedIn;
    },
  },
  getters: {
    authModalShow: (state) => state.authModalShow,
  },
  actions: {
    async register() {
      await userCredentials = await auth.createUserWithEmailAndPassword(values.email, values.password);
    }
  }
});