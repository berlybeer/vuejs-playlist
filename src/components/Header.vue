<template>
  <header>
    <h1 v-on:click="changeTitle">{{ myTitle}}</h1>
  </header>
</template>

<script>
import { bus } from "../main";
export default {
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      myTitle: this.title,
    };
  },

  methods: {
    changeTitle: function () {
      // this.$emit("changeTitle", "Vue Wizards");
      this.myTitle = "Vue Wizards";
      bus.$emit("titleChanged", "Vue Wizards");
    },
  },
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}

h1 {
  color: #222;
  text-align: center;
}
</style>
