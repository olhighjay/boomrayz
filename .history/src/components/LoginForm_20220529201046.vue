<template>
<div class="text-white text-center font-bold p-4 mb-4" v-if="log_show_alert"
    :class="log_alert_variant">
        {{ log_alert_message }}
    </div>
    <vee-form :validation-schema="loginSchema"
        @submit="login">
        <!-- Email -->
        <div class="mb-3">
            <label for="loginemail" class="inline-block w-full mb-2">Email</label>
            <vee-field id="loginemail" type="email" name="email"
            class="block py-1.5 px-3 text-gray-800 w-full border border-gray-300 transition
                duration-500 focus:outline-none focus:border-black rounded"
            placeholder="Enter Email" />
            <ErrorMessage class="text-red-600" name="email" />
        </div>
        <!-- Password -->
        <div class="mb-3">
            <label for="loginpass" class="inline-block w-full mb-2">Password</label>
            <vee-field type="password" id="loginpass" name="password"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                duration-500 focus:outline-none focus:border-black rounded"
            placeholder="Password" />
            <ErrorMessage class="text-red-600" name="password" />
        </div>
        <button type="submit"
            class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
            hover:bg-purple-700" :disabled="log_in_submission">
            Submit
        </button>
    </vee-form>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      loginSchema: {
        email: 'required|email',
        password: 'required',
      },
      log_in_submission: false,
      log_show_alert: false,
      log_alert_variant: 'bg-blue-500',
      log_alert_message: 'Please wait! We are logging you in.',
    };
  },
  methods: {
    async login(values) {
      this.log_in_submission = true;
      this.log_show_alert = true;
      this.log_alert_variant = 'bg-blue-500';
      this.log_alert_message = 'Please wait! We are logging you in.';
        try{
            await this.$store.dispatch('login', values);
        } catch(error){
            this.log_in_submission = false;
            this.log_alert_variant = 'bg-red-500';
        }
      
      //   this.log_in_submission = false;
      //   this.log_show_alert = false;
      this.log_alert_variant = 'bg-green-500';
      this.log_alert_message = 'Success! You are now logged in.';
      console.log(values);
    },
  },
};
</script>
