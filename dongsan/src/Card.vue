<template>
  <div>
    <img :src="onerooms.image" class="room-img" />
    <h4 @click="func1">{{onerooms.title}}</h4>
    <p>{{ onerooms.price }}원</p>
    
    <!-- <button v-on:click="신고수[0]++">신고버튼</button>
    <span>신고수 : {{ 신고수[0] }}</span>
    <button @click="자바스크립트">신고버튼</button> <span>신고수 : 0</span> -->
  </div>
</template>

<script>
export default {
    name : "Card",
    props : {
    onerooms : Object,
  },
  methods : {
    func1(){
      this.$emit('openModal', this.onerooms.id);
    }
  }
}

</script>

<style>

</style>