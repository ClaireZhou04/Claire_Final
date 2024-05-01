import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let moduleFn = require.context('./modules', false, /\.js$/);
let modules = moduleFn.keys().reduce((p, c) => {
	let mod = moduleFn(c).default;
	mod = { ...mod, namespaced: true };
	let modName = c.match(/\.\/(\w+)\.js$/)[1];
	p[modName] = mod;
	return p;
}, {});

export default new Vuex.Store({ modules });



// import Vue from 'vue';
// import Vuex from 'vuex';
// import getTaskJbInfo from './modules/getTaskJbInfo'
// import createPersistedstate from 'vuex-persistedstate'


// Vue.use(Vuex)

// export default new Vuex.Store({
//     state: {

//     },
//     getters: {

//     },
//     mutations: {

//     },
//     actions: {

//     },
//     modules: {
//         getTaskJbInfo,
//     },
//     //plugins:[] vuex插件-持久化 数组语法 多个插件名称
//     plugins: [
//         createPersistedstate({
//             key: 'info',//存储vuex数据的任意键名--本地存储里面 localStorage 
//             // key: ['info','List'],//存储vuex数据的任意键名--本地存储里面 localStorage 
//             paths: ['getTaskJbInfo'],//存储的模块名称一级全局state数据  不写默认存储所有内容
//         }),
//         //...
//     ]
// })