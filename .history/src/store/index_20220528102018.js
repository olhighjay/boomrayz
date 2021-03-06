import { createStore } from 'vuex';
import { auth, usersCollection } from '@/includes/firebase';

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
    async register({ commit }, payload) {
      await auth.createUserWithEmailAndPassword(payload.email, payload.password);

      await usersCollection.add({
        name: payload.name,
        email: payload.email,
        age: payload.age,
        country: payload.country,
      });

      commit('toggleAuth');
    },
  },
});
