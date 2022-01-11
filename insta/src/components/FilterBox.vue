<template>
  <div @click="emitter.emit('selectedFilter',filterdata)" :class="filterdata + ' filter-item'"  :style="{backgroundImage:'url('+image_url +')'}">
  <slot name="a"></slot>  
  <button @click="fire">버튼</button>
  </div> 
</template>

<script>
export default {
    name : 'filterbox',
    methods:{
      fire(){
        this.emitter.emit('작명', 'data')
      }
    },
    props:{
        image_url:String,
        filterdata:String,
    }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>