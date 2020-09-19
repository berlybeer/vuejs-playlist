<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>Author {{blog.author}}</p>
    <ul>
      <li v-for="(category, idx) in blog.categories" v-bind:key="idx">{{category }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },

  created() {
    this.$http
      .get(
        "https://vue-playlist-5a8f1.firebaseio.com/posts/" + this.id + ".json"
      )
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        this.blog = data;
      });
  }
};
</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px dotted #aaa;
}
article {
  font-family: "Raleway";
}
</style>