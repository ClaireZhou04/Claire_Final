<template>
	<div id="container"></div>
</template>

<script>
import * as THREE from 'three';
// 引入轨道控制器扩展库OrbitControls.js     鼠标控制大小，旋转等等
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { RGBELoader } from '@/utils/RGBELoader.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import * as TWEEN from 'three/examples/jsm/libs/tween.module.js';
import { GammaCorrectionShader } from 'three/examples/jsm/shaders/GammaCorrectionShader.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
export default {
	name: 'home',
	data() {
		return {};
	},
	mounted() {
		const scene = new THREE.Scene(); // 创建场景
				// 创建音频监听器
		const listener = new THREE.AudioListener();
		// 将音频监听器添加到相机中
		scene.add(listener);
		// 创建音频对象
		const sound = new THREE.Audio(listener);
		// 创建音频加载器
		const audioLoader = new THREE.AudioLoader();
		// 加载音频文件
		audioLoader.load('/video/bgm.mp3', function (buffer) {
			// 设置音频对象的音频缓冲区
			sound.setBuffer(buffer);
			// 设置音频循环播放
			sound.setLoop(true);
			// 设置音频音量（可选）
			sound.setVolume(0.5);
			// 播放音频
			sound.play();
		});
		// 点光源
		let point = new THREE.PointLight(0xffffff);
		point.position.set(20, 20, 30);
		scene.add(point);
		//环境光
		let ambient = new THREE.AmbientLight(0x444444);
		ambient.intensity = 50;
		scene.add(ambient);
		// 相机设置
		let container = document.getElementById('container');
		//创建相机对象
		let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 15000);
		// camera.position.set(51, 13, 43); //设置相机位置
		camera.aspect = window.innerWidth / window.innerHeight; // 更新摄像头宽高比例
		camera.updateProjectionMatrix(); // 更新摄像头投影矩阵
		//创建渲染器对象
		let renderer = new THREE.WebGLRenderer({
			antialias: true, // 设置抗锯齿
			logarithmicDepthBuffer: true, //对数深度缓冲区
		});
		renderer.setSize(window.innerWidth, window.innerHeight); //设置渲染区域尺寸
		// 监听屏幕的大小改变，修改渲染器的宽高，相机的比例
		window.addEventListener('resize', () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		});
		container.appendChild(renderer.domElement); //body元素中插入canvas对象
		const controls = new OrbitControls(camera, renderer.domElement); // 渲染
		controls.maxPolarAngle = (Math.PI * 89) / 180; //禁止看到底部-------------------------------
		// 环境纹理
		let rgbeLoader = new RGBELoader();
		rgbeLoader.load('/Textures/hdr/111.hdr', (texture) => {
			texture.mapping = THREE.EquirectangularReflectionMapping;
			scene.background = texture;
			scene.environment = texture;
			renderer.render(scene, camera);
		});
		let texture = new THREE.TextureLoader().load('/Textures/ground/ground.jpg'); // 加载贴图纹理
		texture.encoding = THREE.sRGBEncoding; // 修改为THREE.sRGBEncoding，
		// // 创建声音
		// const listener = new THREE.AudioListener();
		// const sound = new THREE.Audio(listener);
		// const audioLoader = new THREE.AudioLoader();
		// audioLoader.load('/video/show.mp3', function (buffer) {
		// 	sound.setBuffer(buffer);
		// 	sound.setLoop(true);
		// 	// sound.setVolume(0.5);
		// 	if (!sound.isPlaying) {
		// 		sound.play();
		// 	}
		// });
		// 实例化加载器GLTFLoader
		const gltfLoader = new GLTFLoader();
		const dracoLoader = new DRACOLoader(); // 实例化draco
		dracoLoader.setDecoderPath('/draco/');
		gltfLoader.setDRACOLoader(dracoLoader);
		// 加载模型
		gltfLoader.load('/model/222.glb', (gltf) => {
			const initialPosition = new THREE.Vector3(-158, 530, -998);
			// const targetPosition = new THREE.Vector3(51, 13, 43);
			const targetPosition = new THREE.Vector3(1, 1, 1);
			// 将相机设置到初始位置
			camera.position.copy(initialPosition);
			// 创建 Tween.js 动画
			const tween = new TWEEN.Tween(camera.position)
				.to(targetPosition, 4000) // 过渡时间为4秒
				.easing(TWEEN.Easing.Quadratic.InOut) // 缓动函数，可以根据需要选择不同的缓动函数
				.onUpdate(() => {
					// 在动画进行中，每次更新相机位置
					camera.lookAt(0, 0, 0);
				})
				.onComplete(() => {
					this.$message.success('加载成功！！！');
				});
			// 开始动画
			tween.start();
			// console.log('gltf',gltf);
			gltf.scene.children.forEach((child) => {
				// console.log('child',child.name);
				scene.add(child);
				// child.scale.set(1.1, 1.1, 1.1);
				// 调用隐藏和显示
				if (/samor_4077_555/.test(child.name)) {
					setupToggleVisibility(child, true);
				}
				if (/samor_4077_557/.test(child.name)) {
					setupToggleVisibility(child, true);
				}
				// 树
				if (/samor_4077_161/.test(child.name)) {
					setupToggleVisibility(child, true);
				}
				// 检查是否符合条件并调用setupToggleVisibility函数
				if (/samor_4077_335/.test(child.name)) {
					setupToggleVisibility(child, true); // 初始化时隐藏物体
				}
			});
		});
		// 消失出现函数
		function setupToggleVisibility(child, initialVisibility = false) {
			let isHidden = !initialVisibility;
			// 初始化时隐藏物体
			child.visible = !initialVisibility;
			// 点击事件处理函数
			function handleClick(event) {
				const raycaster = new THREE.Raycaster();
				raycaster.setFromCamera(
					new THREE.Vector2((event.offsetX / window.innerWidth) * 2 - 1, -(event.offsetY / window.innerHeight) * 2 + 1),
					camera
				);
				const intersects = raycaster.intersectObjects([child]);
				if (intersects.length > 0) {
					child.visible = !isHidden;
				}
				isHidden = !isHidden;
			}
			// 为渲染器添加点击事件监听器
			renderer.domElement.addEventListener('click', handleClick);
		}

		// wasd移动-------------------------
		const movementSpeed = 1; // 移动速度
		const keys = {}; // 用于存储按下的键
		// 监听键盘按下和松开事件
		document.addEventListener('keydown', (event) => {
			keys[event.key.toLowerCase()] = true;
		});
		document.addEventListener('keyup', (event) => {
			keys[event.key.toLowerCase()] = false;
		});
		// 创建循环函数，用于更新相机位置
		function updateCameraPosition() {
			if (keys['w']) {
				camera.position.x -= movementSpeed; // W键,向右移动，使用负数
			}
			if (keys['a']) {
				camera.position.z += movementSpeed; // A键,向前移动，使用正数
			}
			if (keys['s']) {
				camera.position.x += movementSpeed; // S键,向左移动，使用正数
			}
			if (keys['d']) {
				camera.position.z -= movementSpeed; // D键,向后移动，使用负数
			}
			requestAnimationFrame(updateCameraPosition); // 循环调用函数
		}
		updateCameraPosition(); // 启动循环函数
		renderer.domElement.style.cursor = 'pointer';
		// 动画渲染函数------------------------------------------------
		function animate() {
			renderer.render(scene, camera);
			requestAnimationFrame(animate);
			TWEEN.update();
			console.log('camera.position', camera.position);
		}
		animate();
	},
	methods: {},
};
</script>

<style scoped lang="scss">
#container {
	width: 100vw;
	height: 100vh;
}
</style>








