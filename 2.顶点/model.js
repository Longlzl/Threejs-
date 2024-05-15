/**
 * 导入THREE库，为创建3D几何体做准备。
 */
import * as THREE from 'three';

/**
 * 创建一个BufferGeometry对象，它是用于存储3D形状数据的缓冲区。
 */
const geometry = new THREE.BufferGeometry();

/**
 * 定义顶点数组，每个顶点由三个浮点数表示（x, y, z）。
 * 这里定义了6个顶点，用于创建一个简单的3D形状。
 */
const vertices = new Float32Array([
    0, 0, 0, // 顶点1
    50, 0, 0, // 顶点2
    0, 100, 0, // 顶点3
    0, 0, 10, // 顶点4
    0, 0, 100, // 顶点5
    50, 0, 10, // 顶点6
])

/**
 * 创建一个BufferAttribute对象，它将顶点数据与几何体关联起来。
 * 3表示每个顶点的数据维度（即x, y, z坐标）。
 */
const attribute = new THREE.BufferAttribute(vertices, 3);

/**
 * 向几何体添加'position'属性，用于定义物体的位置。
 */
geometry.attributes.position = attribute;

// 创建一个Material对象，它定义了物体的材质和外观。
const material = new THREE.PointsMaterial({
    size: 10, // 点的大小
    color: 0xffffff, // 点的颜色
});
const points = new THREE.Points(geometry, material);
export default points;
