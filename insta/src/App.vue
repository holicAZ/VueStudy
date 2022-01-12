<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="step--">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step==1" @click="step++">Next</li>
      <li v-if="step==2" @click="publish"> 발행 </li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>
  
  <!-- <h4>{{ $store.state.name }}</h4>
  <button @click="$store.commit('nameChange')">버튼</button>
  <h4>{{ $store.state.age }}</h4>
  <button @click="$store.commit('ageChange',10)"> 버튼 </button> -->

  <Container new_content = $event :insta_data="insta_data" :step="step" :image_url="image_url"/>
  <button @click="more"> 더보기 </button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>

 <div style="margin-top : 500px;"></div>
</template>

<script>
import Container from './components/Container.vue';
import insta_data from './assets/insta_data.js';
import axios from 'axios';
export default {
  name: 'App',
  data(){
    return{
      insta_data : insta_data,
      more_cnt : 0,
      step: 0,
      image_url : "",
      new_content : "",
      selectFilter : "",
    }
  },
  mounted(){
    this.emitter.on('작명', (a)=> {
      console.log(a);
    });
    this.emitter.on('selectedFilter', (a)=>{
      this.selectFilter = a;
    })
  },
  components: {
    Container:Container,
  },
  methods: {
    publish(){
      var new_data = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.image_url,
        likes: 0,
        date: "May 15",
        liked: false,
        content: this.new_content,
        filter: this.selectFilter,
      };
      this.insta_data.unshift(new_data); // unshift 맨 왼쪽(처음)에 자료 추가
      this.step = 0;
    }
    ,
    more(){
      //axios.post('URL', {name:'kim'}).then().catch((err)=>{
        
      //}) 실패시 catch 내용 실행
      axios.get('https://codingapple1.github.io/vue/more'+this.more_cnt+'.json')
      .then(result =>{
        console.log(this.more_cnt);
        this.more_cnt++;
        this.insta_data.push(result.data);  
      })
    },
    upload(e){
      let file = e.target.files;
      console.log(file[0]);
      let url = URL.createObjectURL(file[0]);
      console.log(url);
      this.step++;
      this.image_url = url;
    },
  },
  
}
</script>

<style>
@import 'style.css';


</style>
