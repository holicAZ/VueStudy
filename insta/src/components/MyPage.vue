<template>
<div style="padding : 10px">
  <h4>팔로워</h4>
  <input placeholder="Searh" />
  <div class="post-header" v-for="follow in follower" :key="follow">
    <div class="profile" :style="{backgroundImage: 'url(' + follow.image + ')'}"></div>
    <span class="profile-name">{{follow.name}}</span>
  </div>
</div>
</template>

<script>
import { onMounted,ref } from 'vue'; // vue 의 자동 랜더링은 ref 데이터 타입 덕분
import axios from 'axios';
export default {
    name : 'mypage',
    // json 데이터 axios로 가져오면 자동으로 object array로 변경해줌
    setup(){ //compositon api 개발
        let follower = ref([]); // 변경을 실시간으로 반영하기 위해
        
        onMounted(()=>{ // composition api 에서 lifecycle Hook 사용하려면 On을 붙이고 ()=> 형식으로 사용

        })

        axios.get('/follower.json').then((a)=>{
            follower.value = a.data;
        })

        return {follower}
    },
    data(){
        return{
            
        }
    },
    
}
</script>

<style>

</style>