<template>
  <footer>
    <p>{{ copyright }} {{myTitle}}</p>
  </footer>
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
      copyright: "Copyright 2017 ",
      myTitle: this.title,
    };
  },
  created() {
    bus.$on("titleChanged", (data) => {
      this.myTitle = data;
    });
  },
};
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: lightgreen;
  text-align: center;
}
</style>