<template>
<!-- <div class="logo_frame">
  <img class="logo" :src="tittle_img"/>
</div>
<div class="scene" >
  <h1 class="tittle">Dazzling Moment</h1>
</div> -->

<div id="app">
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
        <img class="logo" :src=logo_src alt="">
        <div class="content">
          <span style="color: #fff; text-shadow: 4px 3px 2px #000000"> "소중한 사람과 빛나는 시간을"</span>
        </div>
        <!-- <h1 class="tittle">DAMO</h1>
        <span class="sub_tittle">:</span> <span style="color:#f93f5b">Da</span><span>zzling</span> <span style="color:#f93f5b">Mo</span><span>ments</span> -->
      </div>
    </section>
    <section class="fullpage black">
      <div class="container">
        <div class="row " style="margin-left:24px;">
          <div class="col-md-5 mt-5" >
            <img class="main_img" :src=main_src alt="">
          </div>
          <div class="col-md-7 align-self-center">
            <img class="main_text" :src=main_text alt="">
            <!-- <div class="row">
              <div class="col-md-12">
                <span class="second_page">레터링 케이크의 비교와&nbsp;</span><span class="second_page"> 주문을&nbsp;</span> <span class="second_impect">편리</span><span class="second_page">하게 !</span>
              </div>
            </div> -->
          </div>
          
        </div>
      
      </div>
      
    </section>
    <section class="fullpage red">
      <div>
      <Flicking :options="{ align:'prev', circular: true,}" style="width: 30em">
        <img class="panel" :src=third_img v-for="third_img in third_img_src" :key="third_img" alt="">
      </Flicking>
      </div>
    </section>
    <section class="fullpage green">
      <h1>Section 4</h1>
      <p>Tutorial <a href="https://webdeasy.de/en/programming-vue-js-fullpage-scroll/?referer=cp-NVOEBL" target="_blank">here</a></p>
    </section>
  </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import logo_src from './assets/image/damologo.png'
import main_src from './assets/image/mainpage.png'
import main_text from './assets/image/main_text.png'
import third_img01_src from './assets/image/detailpage.png'
import third_img02_src from './assets/image/review.png'
import third_img03_src from './assets/image/faq.png'
import third_img04_src from './assets/image/dmpage.png'
export default {
  name: 'App',
  data(){
    return{
      logo_src : logo_src,
      main_src: main_src,
      main_text: main_text,
      third_img_src: [third_img01_src, third_img02_src, third_img03_src, third_img04_src],
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
    }
  },
  components: {
    Flicking : Flicking,
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
    font-family: 'SBAggroB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
body {
  margin: 0;
  color: #FFF;
  font-family: Helvetica, arial, sans-serif;
  overflow: hidden;
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
}
.main_img{
  width: 19em;
  display: inline-block;
  margin-left: 2em;
  margin-right: 4em;
  vertical-align: center;
  border-radius: 2.1rem;
  box-shadow: 2px 2px 2px rgb(75, 56, 56);
}
.main_text{
  width:40em;
}
.sub_tittle{
  font-size: 2em;
  padding: 0 1rem;
}
.second_page{
  word-break:keep-all;
  display: inline-block;
  font-family: "SBAggroB";
  font-size: 3.7em;
  color: #FFF;
  text-shadow: 2px 2px 1px #f79b5d
}
.second_impect{
  word-break:keep-all;
  font-family: "SBAggroB";
  font-size: 3.7em;
  display: inline;
  color: #f79b5d;
  text-emphasis-style: dot;
  text-emphasis-position: over left;
  -webkit-text-emphasis-style: dot;
  -webkit-text-emphasis-position: over;
  text-shadow: 2px 2px 1px #000000;
}
.panel{
  width: 19em;
  display: inline-block;
  margin-left: 2em;
  margin-right: 4em;
}
span{
  font-size: 1.8em;
  color: #f79b5d;
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
   color: #f93f5b;
}
.blue:after{  
  content : "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('./assets/image/cake6.jpg');
  background-size: cover;
  width: 100%;
  height: 100%;
  opacity : 0.79;
  z-index: -10;
}

.green {
  background-color: #68c368;
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

 @media screen and (max-width: 992px) {
  h1 {
    font-size: 2.5em;
  }
  .main_img{
    width: 15em;
  }
  .main_text{
    margin-left: 2em;
    width: 16em;
  }
} 

</style>
