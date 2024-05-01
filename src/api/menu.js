import request from '@/utils/request1';

/**
 * webpack 的代理只是本地开发生效，打包后需要在部署环境 搭建 nginx 代理
 * 所以：
 * 开发环境，请求跨越的接口。为了配置跨越示例
 * 线上环境，请求目录下的 `json` 数据
 * 一般后端接口都会处理跨越问题，可根据具体情况进行修改
 * 本地菜单地址：public/xxx.json
 */

/**
 * 后端控制路由，isRequestRoutes 为 true，则开启后端控制路由
 * @method getMenuAdmin 获取后端动态路由菜单(admin)
 * @method getMenuTest 获取后端动态路由菜单(test)
 */
export function useMenuApi() {
	return {
		getMenuAdmin: (params) => {
			// 本地数据，路径：`/public/xxx.json`
			return request({
				url: './admin.json',
				method: 'get',
				params,
			});
		},
		getMenuTest: (params) => {
			// 本地数据，路径：`/public/xxx.json`
			return request({
				url: './test.json',
				method: 'get',
				params,
			});
		},
	};
}
