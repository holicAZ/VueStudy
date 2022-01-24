<template>
<div id="app">
  <div style="position:fixed; z-index:1; margin-left:2em; margin-top:2em;">
      <img v-if="activeSection == 0 || activeSection == 3" :src=damologo3 >
      <img v-if="activeSection == 1 || activeSection == 2" :src=damologo2 alt="">
  </div>
  <div class="sections-menu">
    <span
      class="menu-point"
      v-bind:class="{active: activeSection == index}"
      v-on:click="scrollToSection(index)"
      v-for="(offset, index) in offsets" :key="index">
    </span>
  </div>
    <section class="fullpage blue">
      <div class="container">
        <div class="content">
          <span class="logo_text" style="color: #fff; text-shadow: 4px 3px 2px #f79b88"> "소중한 사람과 빛나는 시간을"</span>
        </div>
      </div>
    </section>
    <section class="fullpage black">
      <div class="container">
        <div class="row " style="margin-left:24px;">
          <div class="col-sm-5 mt-5" >
            <Flicking ref="flicking" :options="{ circular: true,}" :plugins="plugins" style="display:inline-block; width: 20em;">
              <img class="panel" :src=main_img v-for="main_img in main_img_src" :key="main_img" alt="">
            </Flicking>
          </div>
          <div class="col-sm-7 ">
            <img class="main_text" :src=main_text alt="">
          </div>
        </div>
      </div>
      
    </section>
    <section class="fullpage red">
      <div class="container" style="text-align:center">
        <div class="row align-items-center">
          <div class="col-md-12">
              <span class="store_text"> 친구, 연인 가까운 사람들과 소중한 순간을 함께 할 특별한 케이크를 만나보세요</span>
          </div>
        </div>
        <div class="row" >
          
          <div class="col-md-offset-5 col-md-2">
            <img class="arrow" :src=arrow_img alt="">
          </div>
          
        </div>
        <div class="row">
          <div class=" col-md-5" style="display:inline-block">
            <img class="store_img" :src=playstore_img alt="">
          </div>      
          <div class="col-md-offset-2 col-md-5" style="display:inline-block">
            <img class="store_img" :src=appstore_img alt="" >
          </div>
        </div>
      </div>
    </section>
    <section class="fullpage green">
      <div class="container" style="color:#000">
        <div class="row">
          <div class="col-md-5">
            <span>(주)사비트</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5">
            <span>부산광역시 ~~</span>
          </div>
        </div>
        <br><br>
        <div class="row">
          <div class="col-md-5">
            <span>사업자등록번호: </span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5">
            <span>통신판매업: </span>
          </div>
        </div>
        <br><br>
        <div class="row">
          <div class="col-md-5">
            <span> 문의 및 판매자 입점 신청 </span>
            <img :src=send alt=""> &nbsp;
            <span> 4bit.damo@gmail.com </span>
          </div>
          <div class="col-md-5">    
          </div>
        </div>
      
        <div class="row">
          <div class="col-md-5">
            <span style="color:#000000"> 고객문의 </span>
            <img :src=phone alt=""> &nbsp;
            <span style="color:#000000"> 010-1234-4567 </span>
          </div>
          <div class="col-md-5">
            
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking"
import { AutoPlay, } from "@egjs/flicking-plugins"
import logo_src from './assets/image/damologo.png'
import main_img00_src from './assets/image/mainpage.png'
import main_text from './assets/image/main_text.png'
import main_img01_src from './assets/image/detailpage.png'
import main_img02_src from './assets/image/review.png'
import main_img03_src from './assets/image/faq.png'
import main_img04_src from './assets/image/dmpage.png'
import arrow_img_src from './assets/image/party.svg'
import playstore_img_src from './assets/image/playstore.svg'
import appstore_img_src from './assets/image/appstore.svg'
import damologo2 from './assets/image/damologo2.svg'
import damologo3 from './assets/image/damologo3.svg'
import phone from './assets/image/phone.svg'
import send from './assets/image/send.svg'

export default {
  name: 'App',
  components: {
    Flicking : Flicking,
  },
  data(){
    return{
      phone: phone,
      send: send,
      damologo2: damologo2,
      damologo3: damologo3,
      playstore_img: playstore_img_src,
      appstore_img: appstore_img_src,
      arrow_img: arrow_img_src,
      plugins: [new AutoPlay({duration:1000, direction:"NEXT", stopOnHover:false})],
      logo_src : logo_src,
      main_text: main_text,
      main_img_src: [main_img00_src,main_img01_src,main_img02_src,main_img03_src,main_img04_src],
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
    }
  },
  created() {
    this.$nextTick(function(){
      this.calculateSectionOffsets();
    })
    
    window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM);  // Mozilla Firefox
    window.addEventListener('mousewheel', this.handleMouseWheel, { passive: false }); // Other browsers
    
    window.addEventListener('touchstart', this.touchStart, { passive: false }); // mobile devices
    window.addEventListener('touchmove', this.touchMove, { passive: false }); // mobile devices
  },
  unmounted() {
    window.removeEventListener('mousewheel', this.handleMouseWheel, { passive: false });  // Other browsers
    window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
    
    window.removeEventListener('touchstart', this.touchStart); // mobile devices
    window.removeEventListener('touchmove', this.touchMove); // mobile devices
  },
  methods: {
    prevFlick(){
      this.$refs.flicking.prev();
    },
    nextFlick(){
      this.$refs.flicking.next();
    },
    calculateSectionOffsets() {
      let sections = document.getElementsByTagName('section');
      let length = sections.length;
      
      for(let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    },
    handleMouseWheel(e) {
      
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }
        
      e.preventDefault();
      return false;
    },
    handleMouseWheelDOM(e) {
      
      if (e.detail > 0 && !this.inMove) {
        this.moveUp();
      } else if (e.detail < 0 && !this.inMove) {
        this.moveDown();
      }
      
      return false;
    },
    moveDown() {
      this.inMove = true;
      this.activeSection--;
        
      if(this.activeSection < 0) this.activeSection = this.offsets.length - 1;
        
      this.scrollToSection(this.activeSection, true);
    },
    moveUp() {
      this.inMove = true;
      this.activeSection++;
        
      if(this.activeSection > this.offsets.length - 1) this.activeSection = 0;
        
      this.scrollToSection(this.activeSection, true);
    },
    scrollToSection (id, force = false) {
      if(this.inMove && !force) return false;
      
      this.activeSection = id;
      this.inMove = true;
      
      document.getElementsByTagName('section')[id].scrollIntoView({behavior: 'smooth'});
      
      setTimeout(() => {
        this.inMove = false;
      }, 400);
      
    },
    touchStart(e) {
      e.preventDefault();
      
      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e) {
      if(this.inMove) return false;
      e.preventDefault();
      
      const currentY = e.touches[0].clientY;
      
      if(this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }
      
      this.touchStartY = 0;
      return false;
    }
  },
  
}
</script>

<style>
@font-face {
    font-family: 'Eulyoo1945-SemiBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2102-01@1.0/Eulyoo1945-SemiBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'OTWelcomeBA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/OTWelcomeBA.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

body {
  margin: 0;
  color: #FFF;
  font-family: Helvetica, arial, sans-serif;
  overflow: hidden;
  -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none;
}


h2 {
  position: fixed;
}

.fullpage {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

h1 {
  font-size: 5em;
  margin: 0;
  text-align:left;
  padding: 0 1rem;
}
.logo{
  display: inline-block;
  width: 40rem;
  height: 30rem;
  transform: scale(1.5);
  vertical-align: middle;
  margin-right: 0;
  
}
.logo_text{
  font-size: 2em;
}
.cotainer{
  display: flex;
}
.content{
  word-break: keep-all;
  display: inline-block;
  width: auto;
  margin-left: 5em;
  font-family: 'Eulyoo1945-SemiBold';
  font-size: 2rem;
  transform: scale(1.3);
  
}
.second_image_container{
  display: flex;
  margin-bottom: -4em;
}
.panel{
  width: 19em;
  height: 38em;
  display: inline-block;
  margin-left: 2em;
  margin-right: 4em;
  vertical-align: center;
  border-radius: 2.1rem;
  border: #000;
  box-shadow: 2px 2px 2px rgb(75, 56, 56);
}
.main_text{
  width:40em;
  margin-left: -2em;
}
.sub_tittle{
  font-size: 2em;
  padding: 0 1rem;
}
p {
  font-size: 1em;
}	

.fullpage a {
  text-decoration: none;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.3);
  padding: 5px 10px;
  color: #FFF;
  margin-left: 5px;
}

.red {
  background-color:#f93f5b;
  opacity: .9;
}

section.black {
  background-color:#f93f5b;
  opacity: .9;
}

.blue {
   position: relative;
   
}
.blue:after{  
  content : "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('./assets/image/cake12.jpg');
  background-size: cover;
  background-position: 50% 50%;
  width: 100%;
  height: 100%;
  opacity : 0.79;
  z-index: -10;
}

.arrow{
  margin-top: 1em;
  margin-bottom: 2em;
  width: 10em;  
}

.store_img{
  width: 20em;
}

.store_text{
  font-family: 'OTWelcomeBA';
  font-size: 3em;
  word-break: keep-all;
}

.green {
  background-color: #ffffff;
}

h1.black {
  color: #000;
}

.sections-menu {
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.sections-menu .menu-point {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #FFF;
  display: block;
  margin: 1rem 0;
  opacity: .6;
  transition: .4s ease all;
  cursor: pointer;
  
}

.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}

 @media screen and (max-width: 770px) {
  h1 {
    font-size: 2.5em;
  }
  .panel{
    margin-top: 5em;
    height: 34em;
  }
  .main_text{
    margin-left: 2em;
    width: 16em;
  }
  .store_text{
    font-size: 2em;
  }
  .store_img{
    width:14em;
  }
  .arrow{
    width:6em;
  }
} 

</style>
