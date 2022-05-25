<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" :class="{'hidden': !modal}" id="modal">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center
      sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden
        shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-bold">Your Account</p>
            <!-- Modal Close Button -->
            <div class="modal-close cursor-pointer z-50" @click.prevent="toggleAuthModal"
                @keydown="toggleAuthModal">
              <i class="fas fa-times"></i>
            </div>
          </div>

          <!-- Tabs -->
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <a class="block rounded py-3 px-4 transition"
              :class="{'hover:text-white text-white bg-blue-600': tab === 'login',
              'hover:text-blue-600': tab === 'register'}"
              href="javascript:;" @click.prevent="tab = 'login'">Login</a>
            </li>
            <li class="flex-auto text-center">
              <a class="block rounded py-3 px-4 transition"
              :class="{'hover:text-white text-white bg-blue-600': tab === 'register',
              'hover:text-blue-600': tab === 'login'}"
                href="javascript:;" @click.prevent="tab = 'register'">Register</a>
            </li>
          </ul>

          <!-- Login Form -->
          <form v-show="tab==='login'">
            <!-- Email -->
            <div class="mb-3">
              <label for="loginemail" class="inline-block w-full mb-2">Email
                <input id="loginemail" type="email"
                class="block py-1.5 px-3 text-gray-800 w-full border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Email" />
              </label>
            </div>
            <!-- Password -->
            <div class="mb-3">
              <label for="loginpass" class="inline-block w-full mb-2">Password
                <input type="password" id="loginpass"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Password" />
              </label>
            </div>
            <button type="submit"
              class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
                hover:bg-purple-700">
              Submit
            </button>
          </form>
          <!-- Registration Form -->
          <form v-show="tab==='register'">
            <!-- Name -->
            <div class="mb-3">
              <label for="name" class="inline-block w-full mb-2">Name
                <input type="text" id="name"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Name" />
              </label>
            </div>
            <!-- Email -->
            <div class="mb-3">
              <label for="email" class="inline-block w-full mb-2">Email
                <input type="email" id="email"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Email" />
              </label>
            </div>
            <!-- Age -->
            <div class="mb-3">
              <label for="age" class="inline-block w-full mb-2">Age
                <input type="number" id="age"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded" />
              </label>
            </div>
            <!-- Password -->
            <div class="mb-3">
              <label for="password" class="inline-block w-full mb-2">Password
                <input type="password" id="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Password" />
              </label>
            </div>
            <!-- Confirm Password -->
            <div class="mb-3">
              <label for="confirm" class="inline-block w-full mb-2">Confirm Password
                <input type="password" id="confirm"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Confirm Password" />
              </label>
            </div>
            <!-- Country -->
            <div class="mb-3">
              <label for="country" class="inline-block w-full mb-2">Country
                <select id="country"
                  class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                    duration-500 focus:outline-none focus:border-black rounded">
                  <option value="USA">USA</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Germany">Germany</option>
                </select>
              </label>
            </div>
            <!-- TOS -->
            <div class="mb-3 pl-6">
              <label class="inline-block" for="terms">Accept terms of service
                <input type="checkbox" id="terms" class="w-4 h-4 float-left -ml-6 mt-1 rounded" />
              </label>
            </div>
            <button type="submit"
              class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
                hover:bg-purple-700">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'AppAuth',
  data() {
    return {
      tab: 'login',
    };
  },
  computed: {
    // ...mapState(['authModalShow']),
    ...mapState({
      modal: 'authModalShow',
    }),
  },
  methods: {
    ...mapMutations(['toggleAuthModal']),
  },
};
</script>
