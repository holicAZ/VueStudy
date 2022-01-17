<template>
<div class="logo_frame">
  <img class="logo" :src="tittle_img"/>
</div>
<v-container id="main">
<div v-scroll:#main="handleScroll" class="scene" >
  <h1 class="tittle">Dazzling Moment</h1>
</div>
</v-container>
<div>
  2
</div>
</template>

<script>
import tittle_img_url from "./assets/image/damologo@2x.png"
export default {
  name: 'App',
  data(){
    return{
      tittle_img : tittle_img_url,
      scrollPostion: 0,
    }
  },
  components: {
    
  },
  methods: {
    handleScroll(e){ 
      this.scrollPostion = e.target.scrollTop;
       if(this.scrollPosition > 100){
          console.log("UP") 
       } 
       else { console.log("DOWN") } }
  }
}
</script>

<style>
img{
  image-rendering: auto;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
}
@font-face {
  src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/Anders.ttf');
  font-family: test;
}
.tittle{
  margin-top: -70px;
  font-size: 12em;
}
html,body {
  font-size: 62.5%;
  height: 100%;
  overflow: hidden;
  background-color: #f5dce1;
}
.logo_frame{
  margin-top: -50px;
  margin-bottom: 10px;
}
.logo{
  transform:scale(2.0); 
  width: 20%;
  height: 20vh;
  
}
.scene {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("./assets/image/bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 83%;
  padding: 20rem;
  background-position: center;
}
h1 {
  position: relative;
  font-size: 8rem;
  text-transform: uppercase;
  font-family: test;
  color: #fff;
  z-index: 10;
}
.magic {
  z-index: 5;
  position: absolute;
  top: calc(50% - 10rem);
  left: calc(50% - 10rem);
  width: 20rem;
  height: 20rem;
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/hover-reveal.jpg') 50% 50% no-repeat fixed;
  background-size: cover;
  border-radius: 50%;
}
.check-out {
  z-index: 100;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: #fff;
  font-family: test;
  
  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
