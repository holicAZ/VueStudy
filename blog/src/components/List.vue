<template>
  <div  v-for="(글,i) in 블로그글" :key="i">
      <router-link to="/detail">
        <h5>{{글.title}}</h5>
      </router-link>
      <p>{{글.content}}</p>
  </div>
</template>

<script>
export default {
    name : "List",
    props:{
      블로그글 : Array,
    }
}
</script>

<style>

</style>