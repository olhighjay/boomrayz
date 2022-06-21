<template>
    <div class="border border-gray-200 p-3 mb-4 rounded">
      <div>
      <h4 class="inline-block text-2xl font-bold">[{{ song.modified_name }}]</h4>
      <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right">
          <i class="fa fa-times"></i>
      </button>
      <button @click.prevent="showForm = !showForm"
      class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right">
          <i class="fa fa-pencil-alt"></i>
      </button>
      </div>
      <div v-if="showForm">
        <div class="text-white text-center font-bold p-4 mb-4"
        v-if="show_alert" :class="alert_variant"></div>
        <vee-form :validation-schema="schema" :initial-values="userData"
        @submit="edit">
            <div class="mb-3">
            <label for="modifiedName" class="inline-block mb-2">Song Title</label>
            <vee-field type="text" name="modified_name" id="modifiedName"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
                transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Song Title" />
            <ErrorMessage class="text-red-600" name="modified_name" />
            </div>
            <div class="mb-3">
            <label for="genre" class="inline-block mb-2">Genre
            <vee-field type="text" name="genre" id="modifiedName"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
                transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Genre" />
            <ErrorMessage class="text-red-600" name="genre" /></label>
            </div>
            <button type="submit" class="py-1.5 px-3 rounded text-white bg-green-600"
            :disabled="in_submission">
            Submit
            </button>
            <button type="button" class="py-1.5 px-3 rounded text-white bg-gray-600"
            :disabled="in_submission" @click.prevent="showForm = false">
            Go Back
            </button>
        </vee-form>
      </div>
    </div>
</template>

<script>
import { songsCollection } from '@/includes/firebase'
export default {
  name: 'CompositionItem',
  props: {
    song: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showForm: false,
      schema: {
        modified_name: 'required',
        genre: 'alpha_spaces',
      },
      in_submission: false,
      show_alert: false,
      alert_variant: 'bg-blue-500',
      alert_message: 'Please wait! Updating song info.',
    };
  },
  methods: {
    edit() {
      this.show_alert = true;
      this.show_alert = true;
      this.alert_variant = 'bg-blue-500';
      this.alert_message = 'Please wait! Updating song info.';
    },
  },
};
</script>
