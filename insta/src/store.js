import {createStore } from 'vuex'
import insta_data from './assets/insta_data.js'
const store = createStore({
    state(){
        return {
           name : 'kim',
           age : 20,
           ins : insta_data,
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
        }

    }
})

export default store;