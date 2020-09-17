<template>
  <div>
    <form-helper>
      <!-- <h2 slot="title">{{title}}</h2>
      <p slot="text">I am the paragraph text for the slot</p>-->
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Information about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from "./components/formHelper.vue";

export default {
  components: {
    "form-helper": formHelper,
  },
  data() {
    return {
      title: "I am a dynamic slot title",
    };
  },
  methods: {
    handleSubmit: function () {
      return "Hello";
    },
  },
};
</script>

<style>
</style>
