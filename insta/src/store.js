import {createStore } from 'vuex'
import insta_data from './assets/insta_data.js'
import axios from 'axios'
const store = createStore({
    state(){
        return {
           name : 'kim',
           age : 20,
           ins : insta_data,
           more : {},

        }
    },
    mutations : {
        nameChange(state){
            state.name = 'park'
        },
        ageChange(state, data){
            state.age+=data;
        },
        likePlus(state,num){
            if(state.ins[num].liked === false){
                state.ins[num].likes++;
                state.ins[num].liked = true;
            }
            else{
                state.ins[num].likes--;
                state.ins[num].liked = false;
            }
        },
        setMore(state, data){
            state.more = data;
        }
    },
    actions:{
        getData(context){
            axios.get('https://codingapple1.github.io/vue/more0.json')
            .then((result)=>{
                console.log(result.data);
                context.commit('setMore', result.data);
            })
        }
    },
})

export default store;