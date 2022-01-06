<template>
  <!-- HTML -->
  <transition name="fade">
    <Modal @closeModal="모달창열림=false" :onerooms="onerooms" :누른거="누른거" :모달창열림="모달창열림"/>  
    <!-- props v-bind -->
  </transition>

  <div class="menu" >
    <a v-for="(a, i) in menu_name" :key="i"> {{ a }} </a>
  </div>
  
  <Discount :discount_num = "discount_num"/>

  <button @click="priceSort"> 가격순정렬 </button>
  <button @click="rePriceSort"> 가격역순정렬 </button>
  <button @click="nameSort"> 이름순정렬 </button>
  <button @click="sortBack"> 되돌리기 </button>

  <Card @openModal="모달창열림=true, 누른거=$event" :onerooms="onerooms[i]" v-for="(oneroom,i) in onerooms" :key="i"/>
  <!--<Card :onerooms="onerooms" :모달창열림="모달창열림" :누른거="누른거" />-->
  

  <!--
  <div v-for="(a,i) in products" :key="i">
    <h4> {{ a }} </h4>
    <p>50만원</p>
  </div>
  -->
</template>

<script>
//JS
import oneroom_data from "./oneroom.js";
import Discount from "./Discount.vue";
import Modal from "./Modal.vue";
import Card from "./Card.vue";


export default {
  name: "App",
  data() {
    // 데이터 보관함 object 자료 형식 + UI 등 state 저장
    // 사본을 만들기 위한 [...data]
    return {
      showDiscount : true,
      onerooms_origin : [...oneroom_data],
      누른거 : 0,
      onerooms: oneroom_data,
      모달창열림: false,
      menu_name: ["Home", "Shop", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      스타일: "color:blue",
      신고수: [0, 0, 0],
      discount_num : 30,
    };
  },
  methods: {
    increase() {
      this.신고수++;
    },
    sortBack(){
      //this.onerooms = this.onerooms_origin; // =는 값을 공유해 주세요
      this.onerooms = [...this.onerooms_origin];
    },
    priceSort() {
      this.onerooms.sort(function(a,b){
        return a.price - b.price; // 음수면 왼쪽, 양수면 오른쪽으로
      })
    },
    rePriceSort() {
      this.onerooms.sort(function(a,b){
        return b.price - a.price;
      })
    },
    nameSort() {
      this.onerooms.sort(function(a,b){
        if(a.title < b.title) return -1;
        else return 1;
      })
    }
  },
  mounted(){
    setInterval(()=>{
      this.discount_num --;
    },1000)
  },
 

  components: {
    Discount : Discount,
    Modal: Modal,
    Card: Card,
  },
};
</script>

<style>
.fade-enter-from {
  transform: translateY(-1000px);
  opacity : 0;
}
.fade-enter-active {
  transition : all 1s;
}
.fade-enter-to {
  transform: translateY(0px);
  opacity : 1,
}

body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}


</style>
