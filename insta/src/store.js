import {createStore } from 'vuex'

const store = createStore({
    state(){
        return {
           name : 'kim',
           age : 20,
           likes : 30,
           is_like : false,
        }
    },
    mutations : {
        nameChange(state){
            state.name = 'park'
        },
        ageChange(state, data){
            state.age+=data;
        },
        likePlus(state){
            if(state.is_like == false){
                state.likes++;
                state.is_like = true;
            }
            else{
                state.likes--;
                state.is_like = false;
            }
        }

    }
})

export default store;