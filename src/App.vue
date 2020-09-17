<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{greeting()}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Your firstVue file, woooo!",
    };
  },
  methods: {
    greeting: function () {
      return "heeeey cowboy!";
    },
  },
};
</script>

<style>
</style>
