<template>
    <vee-form v-show="tab==='login'" :validation-schema="loginSchema"
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
            hover:bg-purple-700">
            Submit
        </button>
    </vee-form>
</template>

<script>
export default {
  data() {
    return {
      loginSchema: {
        email: 'required|email',
        password: 'required',
      },
    };
  },
};
</script>
