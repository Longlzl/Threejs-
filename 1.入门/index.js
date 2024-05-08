//引入Threejs
import * as THREE from 'three';
// console.log(THREE);
// 引入轨道控制器
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
/**
 * 创建3D场景对象Scene
 */
const scene = new THREE.Scene();

/**
 * 创建网格模型
 */
//创建一个长方体的几何对象
const geometry = new THREE.BoxGeometry(50, 50, 50);
// //材质对象
// const material = new THREE.MeshBasicMaterial({
//     //绿色
//     color: 0x00ff00,
//     transparent: true,//设置透明
//     opacity: 0.5//设置透明度
// });
//材质对象(漫反射材质)
const material = new THREE.MeshLambertMaterial({
    //绿色
    color: 0x00ff00,
    //设置透明
    transparent: true,
    //设置透明度
    opacity: 0.5,
    //设置混合模式
    blending: THREE.AdditiveBlending
});
//创建一个点光源
const point = new THREE.PointLight(0xffffff,1.0);
point.decay = 0.0001;//衰减
point.position.set(400, 300, 500);//设置点光源位置
scene.add(point);//添加到场景中

const mesh = new THREE.Mesh(geometry, material);//网格模型对象
//设置网格模型位置
mesh.position.set(0, 0, 0);
//添加到场景中
scene.add(mesh);
//创建一个三维坐标轴
const axesHelper = new THREE.AxesHelper(300);
scene.add(axesHelper);

/**
 * 光源设置
 */
//width和height是用来设置截锥体长宽比，值越小，截锥体越长， FOV（field of view）要大一些
const width = 800;//窗口宽度
const height = 500;//窗口高度
/**
 * 透视相机设置
 */
//创建相机对象
const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 2000);//透视相机
camera.position.set(230, 300, 280);//相机位置
camera.lookAt(mesh.position);//设置相机方向(指向的场景对象)

/**
 * 渲染器设置
 */
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);//设置渲染区域尺寸
renderer.render(scene, camera);//渲染出场景
document.body.appendChild(renderer.domElement);//将渲染结果显示在网页中
/**
 * 轨道控制器
 */
const controls = new OrbitControls(camera, renderer.domElement);//创建控件对象
controls.addEventListener('change', function () {//监听鼠标、键盘事件
    renderer.render(scene, camera);//更新渲染显示
});