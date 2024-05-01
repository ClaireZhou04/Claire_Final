
// 存储当前技术信息

export default{
    namespaced:true,
    state:{
        jbInfo:[]
    },
    mutations:{
        getJbInfo(state,payload){
            state.jbInfo = payload
        },
    },

}