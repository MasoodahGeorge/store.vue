<template lang="">
  <div>
    Projects
    <div
      v-for="Project in  projectData()" :key="Project.name">
      <h1>{{Project.name}}</h1>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    projectData() {
      return this.$store.state.Projects;
    },
  },
  computed: {
    getAboutMe() {
      return this.$store.dispatch("getAboutMe");
    },
    // getProjects(){
    // return this.$store.dispatch('getProjects')
    // }
  },
  mounted() {
    this.getAboutMe;
    // this.getProjects
  },
};
</script>
<style lang=""></style>
