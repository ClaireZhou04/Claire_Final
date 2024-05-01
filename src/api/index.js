import base from "./base"
import axios from '@/utils/request1'

// 公共的请求方法
const api = {

    //任务调度计算
    calculate(data) {
        return axios({
            url: '/load/calculate',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data,
        })
    },

    //任务调度计算
    moreCalculate(data) {
        return axios({
            url: '/load/moreCalculate',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data,
        })
    },

    //保存方案
    savePlanMsg(data) {
        return axios({
            url: '/load/savePlanMsg',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data,
        })
    },

    //添加JB开放时间窗口
    addJBOpenTime(data) {
        return axios({
            url: '/load/addJBOpenTime',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data,
        })
    },
    //添加计划信息
    addPlan(data) {
        return axios({
            url: '/load/addPlan',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data,
        })
    },
    //添加任务信息
    addTask(data) {
        return axios({
            url: '/load/addTask',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data,
        })
    },
    //添加任务详情
    addTaskDetails(data) {
        return axios({
            url: '/load/addTaskDetails',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data,
        })
    },



    //删除开放时间
    deleteJBOpenTime(data) {
        return axios({
            url: '/load/deleteJBOpenTime?id='+data,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // data,
        })
    },
    //删除计划
    deletePlan(data) {
        return axios({
            url: '/load/deletePlan?planId='+data,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // data,
        })
    },
    //删除任务需求
    deleteTaskDetails(data) {
        return axios({
            url: '/load/deleteTaskDetails?taskMaterialId='+data,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // data,
        })
    },
    // 删除任务
    deleteTask(data) {
        return axios({
            url: '/load/deleteTask?taskId='+data,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // data,
        })
    },
    //展示JB开放时间窗口
    getJBOpenTime(data) {
        return axios({
            url: '/load/getJBOpenTime',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            data,
        })
    },
    //点击任务出现Jb
    getJBOpenTime1(data) {
        return axios({
            url: '/load/getJBOpenTime?taskId='+data,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            data,
        })
    },



    //展示计划信息
    getPlan(data) {
        return axios({
            url: '/load/getPlan',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // data,
        })
    },
    //展示任务信息
    getTask(data) {
        return axios({
            url: '/load/getTask',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // data,
        })
    },
    //点击计划出现信息
    getTask1(data) {
        return axios({
            url: '/load/getTask?planId='+data,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // data,
        })
    },
    //展示任务详情
    getTaskDetails(data) {
        return axios({
            url: '/load/getTaskDetails',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // data,
        })
    },
    //点击任务出现需求
    getTaskDetails1(data) {
        return axios({
            url: '/load/getTaskDetails?taskId='+data,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // data,
        })
    },
    //阱口列表
    listTrap(data) {
        return axios({
            url: '/load/listTrap',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // data,
        })
    },
    //舱室物资详情
    getRealMaterialAmounts(){
        return axios({
            url: '/load/getRealMaterialAmounts',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // data,
        })
    },
     //物资类型
     getMaterialType(){
        return axios({
            url: '/load/getMaterialType?materialKindId=4',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // data,
        })
    },
    // 舱室物资编辑
    addCabinMaterials(amount,materialTypeId,posId){
        return axios({
            url: '/load/addCabinMaterials?amount='+amount+'&materialTypeId='+materialTypeId+'&posId='+posId,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },

    //物资种类查询
    selectMaterialKind(){
        return axios({
            url: '/base/selectMaterialKind',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // data,
        })
    },
    
    //物资类型查询
    selectMaterialType(){
        return axios({
            url: '/base/selectMaterialType',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // data,
        })
    },
    
    //物资信息查询
    selectMaterial(){
        return axios({
            url: '/base/selectMaterial',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // data,
        })
    },
    
    //物资种类新增
    addMaterialKind(materialKindCode,materialKindName){
        return axios({
            url: '/base/addMaterialKind?materialKindCode='+materialKindCode+'&materialKindName='+materialKindName,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // data,
        })
    },
    //物资类型新增
    addMaterialType(data){
        return axios({
            url: '/base/addMaterialType',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data,
        })
    },
    
    //新增物资
    addMaterial(data){
        return axios({
            url: '/base/addMaterial',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data,
        })
    },
    //获取位置信息
    selectPos(){
        return axios({
            url: '/base/selectPos',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // data,
        })
    },
    //查询车辆
    selectVehicle(){
        return axios({
            url: '/base/selectVehicle',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // data,
        })
    },
    //车辆实时位置查询
    selectVehiclePos(){
        return axios({
            url: '/base/selectVehiclePos?posId=0',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // data,
        })
    },
    
    //新增车辆
    addVehicle(data){
        return axios({
            url: '/base/addVehicle',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data,
        })
    },
    
    //查询车辆类型
    selectVehicleType(){
        return axios({
            url: '/base/selectVehicleType',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    },


    //车辆位置更新新增
    updateVehiclePos(posId,vehicleId){
        return axios({
            url: '/base/updateVehiclePos?posId='+posId+'&vehicleId='+vehicleId,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // data,
        })
    },

    //方案信息
    selectTaskSchedule(){
        return axios({
            url: '/plan/selectTaskSchedule',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // data,
        })
    },
    
    //方案评价
    selectTaskStat(dispatchId){
        return axios({
            url: '/plan/selectTaskStat?dispatchId='+dispatchId,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // data,
        })
    },
    //规划详情
    selectTaskScheduleDetail(taskId){
        return axios({
            url: '/plan/selectTaskScheduleDetail?taskId='+taskId,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // data,
        })
    },
    //调度详情
    selectTaskTransportDetail(dispatchId){
        return axios({
            url: '/plan/selectTaskTransportDetail?dispatchId='+dispatchId,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // data,
        })
    },
    
    
    
    
    
    
    
    




}

export default api;