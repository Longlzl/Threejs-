//引入Threejs
import * as THREE from 'three';
console.log(THREE);
/**
 * 创建3D场景对象Scene
 */
const scene = new THREE.Scene();

/**
 * 创建网格模型
 */
//创建一个长方体的几何对象
const geometry = new THREE.BoxGeometry(50, 50, 50);
//材质对象
const material = new THREE.MeshLambertMaterial({
    color: 0x0000ff,//颜色
});
const mesh = new THREE.Mesh(geometry, material);//网格模型对象
//设置网格模型位置
mesh.position.set(0, 10, 0);
//添加到场景中
scene.add(mesh);

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
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);//透视相机
camera.position.set(292, 223, 185);//相机位置
camera.lookAt(0, 0, 0);//设置相机方向(指向的场景对象)

/**
 * 渲染器设置
 */
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);//设置渲染区域尺寸
renderer.render(scene, camera);//渲染出场景
document.body.appendChild(renderer.domElement);//将渲染结果显示在网页中
