<template>
  <div>
    <div v-if="step == 0">
        <Post :insta = "insta" :num = "i" v-for="(insta,i) in insta_data" :key="i"/>
    </div>
    
    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
        <div :class="selectFilter + ' upload-image'" :style="{backgroundImage:'url('+image_url +')'}"></div>
        <div class="filters">
            <FilterBox :filterdata="filter_data[i]" :image_url="image_url" v-for="(filter,i) in filter_data" :key="i">
                <template v-slot:a> {{filter_data[i]}} </template>
            </FilterBox>
        </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step==2">
        <div :class="selectFilter + ' upload-image'" :style="{backgroundImage:'url('+image_url +')'}"></div>
        <div class="write">
            <textarea class="write-box" @input="$emit('text',$event.target.value)" >write!</textarea>
        </div>
    </div>
  </div>
</template>

<script>
import Post from '../components/Post.vue'
import FilterBox from '../components/FilterBox.vue'
import filterdata from '../assets/filter_data.js'
export default {
    data(){
        return{
            text:"",
            filter_data : filterdata,
            selectFilter : "",
        }
    },
    components: {
        Post,
        FilterBox,
    },
    props: {
        insta_data: Array,
        step: Number,
        image_url: String,
        publish_check: Boolean,
    },
    mounted(){
        this.emitter.on('selectedFilter', (a)=>{
            this.selectFilter = a;
        })
    }
    
}
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
 
</style>