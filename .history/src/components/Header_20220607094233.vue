<template>
    <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <a class="text-white font-bold uppercase text-2xl mr-4" href="#">Music</a>
      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li v-if="!userLoggedIn">
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal">
                Login / Register</a>
          </li>
          <template v-else>
            <li>
              <router-link class="px-2 text-white" to="/">Manage</router-link>
            </li>
            <li>
              <a @click.prevent="signout" class="px-2 text-white" href="#">Logout</a>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['userLoggedIn']),
  },
  methods: {
    ...mapMutations(['toggleAuthModal']),
    ...mapActions(['signout']),
  },
};
</script>
