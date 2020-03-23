import httpClient from '@/api/HttpClient'

export default {
    namespaced: true,
    state:{
        categories: []
    },
    getters:{
        getAll(state){
            const localCategories = JSON.parse(window.localStorage.getItem('categories'));
            return (localCategories === null) ? state.categories : localCategories;
        }
    },
    actions: {
        getAll({ commit }) {
            return httpClient.get(`/categories/categories`)
        },
        create({commit}, payload){
            return httpClient.post(`/categories/categories`, payload)
        },
        delete({commit},payload){
            return httpClient.delete(`/categories/categories/${payload.id}`)
        }
    },
    mutations:{
        SET(state,payload){
            state.categories = payload;
            window.localStorage.setItem('categories',JSON.stringify(state.categories));
        },
        ADD(state,payload){
            state.categories.push(payload);
            window.localStorage.setItem('categories', JSON.stringify(state.categories));
        },
        REMOVE(state,index){
            state.categories.splice(index, 1);
            window.localStorage.setItem('categories', JSON.stringify(state.categories));
        }
    }
}
