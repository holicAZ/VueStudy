<template>
<div style="padding : 10px">
  <h4>팔로워</h4>
  <input placeholder="Search..." @input="searchWord = $event.target.value"/> 
  <div class="post-header" v-for="follow in follower" :key="follow">
    <div class="profile" :style="{backgroundImage: 'url(' + follow.image + ')'}"></div>
    <span class="profile-name">{{follow.name}}</span>

  </div>
</div>
</template>

<script>
import { onMounted,ref,reactive,watch, } from 'vue'; // vue 의 자동 랜더링은 ref 데이터 타입 덕분
import axios from 'axios';
import {useStore} from 'vuex'
export default {
    name : 'mypage',
    // json 데이터 axios로 가져오면 자동으로 object array로 변경해줌
    
    setup(){ //compositon api 개발
        let follower = ref([]); // 변경을 실시간으로 반영하기 위해
        let followerIndex = ref([]);
        let test = reactive({name : 'kim'}) // 보통 array, object 집어넣음
        let searchWord = ref("");
        let followerName = ref([]);
        test;
        //let prp = toRefs(props); // 그냥 사용하면 반응형이 아님. ref로 사용
        watch(searchWord, ()=>{
          followerName.value = follower.value.filter(searchTarget => 
            searchTarget.name.includes(searchWord.value)
          )
          follower.value = followerName.value;
          console.log(followerName.value);
        });

        let store = useStore();
        console.log(store.state.name);

        axios.get('/follower.json').then((a)=>{
          follower.value = a.data;
          console.log("axios");
          // follower.value.forEach(element=> {
          //   followerName.value.push(element.name);
          // })
          // console.log(followerName.value);
        })

        onMounted(()=>{ // composition api 에서 lifecycle Hook 사용하려면 On을 붙이고 ()=> 형식으로 사용
           
        })

        
      
        return {follower, searchWord, followerName, followerIndex}
    },
    data(){
        return{
            
        }
    },

}
</script>
<!-- scoped vue 전염 막음. -->
<style scoped>

</style>