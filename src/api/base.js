// 接口地址
const base = {
    // calculate:'http://192.168.3.38:8080/load/calculate'//任务调度计算
    //任务调度计算
    calculate:'/load/calculate',
    //添加JB开放时间窗口
    addJBOpenTime:'/load/addJBOpenTime',
    //添加计划信息
    addPlan:'/load/addPlan',
    //添加任务信息
    addTask:'/load/addTask',
    //添加任务详情
    addTaskDetails:'/load/addTaskDetails',


    //删除开放时间
    deleteJBOpenTime:'/load/deleteJBOpenTime',
    //删除计划
    deletePlan:'/load/deletePlan',
    //删除任务
    deleteTask:'/load/deleteTask',
    //删除任务需求
    deleteTaskDetails:'/load/deleteTaskDetails',
    //展示JB开放时间窗口
    getJBOpenTime:'/load/getJBOpenTime',


    //展示计划信息
    getPlan:'/load/getPlan',
    //展示任务信息
    getTask:'/load/getTask',
    //展示任务详情
    getTaskDetails:'/load/getTaskDetails',
    //阱口列表
    listTrap:'/load/listTrap',
}


// 单一暴露
// 图片上传地址拼接
// export const host='http://localhost:8877';

// export const uploadUrl='http://localhost:8877/upload';// 图片上传地址，单一暴露，无需请求
export default base