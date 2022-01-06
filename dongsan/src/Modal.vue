<template>
  <div class="black-bg" v-if="모달창열림 == 1">
    <div class="white-bg">
      <h4>{{onerooms[누른거].title}}</h4>
      <img style="width:100%" :src="onerooms[누른거].image" alt="">
      <p>{{onerooms[누른거].content}}</p>
      <!-- <input @input="month = $event.target.value"> -->
      <input v-model.number="month">
      
      <!-- <input type="range" min="1" max="12"> -->
      
      <p>{{month}}개월 선택함 : {{onerooms[누른거].price * month}} 원</p>
      <p @click="$emit('closeModal')">닫기</p> 
    </div>
  </div>
</template>

<script>
export default {
    name : 'Modal',
    data(){
      return {
        month : 1,
      }
    },
    watch : {
      month(a){ // data 명과 동일한 함수로 month라는 데이터가 변할때 마다 함수 실행
        // 사용자가 month를 문자로 입력하면 경고문 출력
        // a는 변경후 데이터, b는 변경전 데이터
        if(isNaN(a)){
          alert('숫자만 입력하시오');
          this.month = 1;
        }
      },
    },
    props : {
      onerooms : Array,
      누른거 : Number,
      모달창열림 : Boolean,
    },
     beforeUpdate(){
       if(this.month ==2){
         alert('개월은 2개월보다 많이');
         this.month = 3;
       }
    },
    
}
</script>

<style>

</style>