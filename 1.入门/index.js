//引入Threejs
import * as THREE from 'three';
// console.log(THREE);
// 引入轨道控制器
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
//引入stats性能监视器
import Stats from 'three/addons/libs/stats.module.js';
// 引入dat.gui中的一个类GUI
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

const gui = new GUI();//创建一个GUI对象
gui.domElement.style.right = '0px';
gui.domElement.style.width = '300px';

//实例化一个stats对象
const stats = new Stats();
//添加stats
document.body.appendChild(stats.domElement);

/**
 * 创建3D场景对象Scene
 */
const scene = new THREE.Scene();

/**
 * 创建网格模型
 */
//创建一个长方体的几何对象
const geometry = new THREE.BoxGeometry(50, 50, 50);
// //创建一个球体的几何对象
// const geometry = new THREE.SphereGeometry(50);
// //创建一个圆柱体的几何对象
// const geometry = new THREE.CylinderGeometry(50, 50, 100, 50);
// //创建一个矩形平面
// const geometry = new THREE.PlaneGeometry(100, 100);
// //创建一个圆形平面
// const geometry = new THREE.CircleGeometry(50, 50);
// //材质对象
// const material = new THREE.MeshBasicMaterial({
//     //绿色
//     color: 0x00ff00,
//     transparent: true,//设置透明
//     opacity: 0.5//设置透明度
// });

// //材质对象(漫反射材质)
// const material = new THREE.MeshLambertMaterial({
//     //红色
//     color: 0xff0000,
//     //设置透明
//     transparent: true,
//     //设置透明度
//     opacity: 0.5,
//     //设置混合模式
//     blending: THREE.AdditiveBlending,
//     //设置矩形平面和圆形平面双面可见
//     side: THREE.DoubleSide
// });

//材质对象(高光材料)
const material = new THREE.MeshPhongMaterial({
    //红色
    color: 0xff0000,
    //高光强度
    shininess: 50,
    //高光部分颜色
    specular: 0x444444
});
const mesh = new THREE.Mesh(geometry, material);//网格模型对象
//设置网格模型位置
mesh.position.set(0, 0, 0);
//添加到场景中
scene.add(mesh);
//创建一个三维坐标轴
const axesHelper = new THREE.AxesHelper(300);
scene.add(axesHelper);

// //创建一个阵列正方体
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         const mesh = new THREE.Mesh(geometry, material);//网格模型对象
//         //设置网格模型位置
//         mesh.position.set(i*100, 0, j*100);
//         //添加到场景中
//         scene.add(mesh);        
//     }
    
// }
/**
 * 光源设置
 */

//创建一个点光源
const point = new THREE.PointLight(0xffffff,1.0);
point.decay = 0.0001;//衰减
point.position.set(400, 300, 500);//设置点光源位置
// scene.add(point);//添加到场景中

//将点光源可视化
const pointLightHelper = new THREE.PointLightHelper(point, 10);
//添加到场景中
scene.add(pointLightHelper);

//创建一个环境光
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);//添加到场景中

//创建一个平行光光源
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
//设置位置
directionalLight.position.set(320, 253, 100);
//添加到场景中
scene.add(directionalLight);
//将平行光光源可视化
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 10, 0xff0000);
// scene.add(directionalLightHelper);


//width和height是用来设置截锥体长宽比，值越小，截锥体越长， FOV（field of view）要大一些
const width = window.innerWidth;//窗口宽度
const height = window.innerHeight;//窗口高度
// const width = 400;
// const height = 400;
/**
 * 透视相机设置
 */
//创建相机对象
const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 2000);//透视相机
camera.position.set(186, 175, 250);//相机位置
camera.lookAt(mesh.position);//设置相机方向(指向的场景对象)

/**
 * 渲染器设置
 */
const renderer = new THREE.WebGLRenderer({
    antialias: true,//开启抗锯齿
});
renderer.setSize(width, height);//设置渲染区域尺寸
renderer.render(scene, camera);//渲染出场景
document.body.appendChild(renderer.domElement);//将渲染结果显示在网页中
//查看屏幕像素比
console.log(window.devicePixelRatio)
//设置像素比
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x444567, 1);//设置背景颜色

/**
 * 轨道控制器
 */
const controls = new OrbitControls(camera, renderer.domElement);//创建控件对象
controls.addEventListener('change', function () {//监听鼠标、键盘事件
    renderer.render(scene, camera);//更新渲染显示
});

//渲染循环
function animate() {
    stats.update();//更新性能监视器
    requestAnimationFrame(animate);
    // mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

//监听窗口变化
window.onresize = function () {
    camera.aspect = window.innerWidth / window.innerHeight;//更新相机宽高比例
    camera.updateProjectionMatrix();//更新相机投影矩阵
    renderer.setSize(window.innerWidth, window.innerHeight);//更新渲染器宽高比例
    renderer.render(scene, camera);//更新渲染器
}

gui.add(ambient, 'intensity', 0, 2.0).name('环境光强度');
gui.add(directionalLight, 'intensity', 0, 2.0).name('平行光强度');
gui.add(mesh.position, 'x', -1000, 1000).name('x轴坐标');
gui.add(mesh.position, 'y', -1000, 1000).name('y轴坐标');
gui.add(mesh.position, 'z', -1000, 1000).name('z轴坐标');

const obj = {
    'x':30,
    color:0xffffff,
    '透明度':0.5,
    '双面可见':false
}
gui.addColor(obj, 'color').onChange(function (value) {
    material.color.set(value);
})