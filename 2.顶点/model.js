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
// const vertices = new Float32Array([
//     0, 0, 0, // 顶点1
//     50, 0, 0, // 顶点2
//     0, 100, 0, // 顶点3
//     0, 0, 10, // 顶点4
//     0, 0, 100, // 顶点5
//     50, 0, 10, // 顶点6
// ])

/**
 * 定义顶点数组，每个顶点由三个浮点数表示（x, y, z）。
 */
const vertices = new Float32Array([
    0, 0, 0, // 顶点1 索引0
    100, 0, 0, // 顶点2 索引1
    100, 100, 0, // 顶点3 索引2
    0, 100, 0, // 顶点4 索引3
])

/**
 * 创建一个BufferAttribute对象，它将顶点数据与几何体关联起来。
 * 3表示每个顶点的数据维度（即x, y, z坐标）。
 */
const attribute = new THREE.BufferAttribute(vertices, 3);

/**
 * 定义索引数组，每个索引表示一个顶点的位置。
 */
const indices = new Uint16Array([
    0, 1, 2, // 三角形1
    3, 2, 0, // 三角形2
])

geometry.index = new THREE.BufferAttribute(indices, 1);

/**
 * 向几何体添加'position'属性，用于定义物体的位置。
 */
geometry.attributes.position = attribute;

// // 创建一个Material对象，它定义了物体的材质和外观。
// const material = new THREE.PointsMaterial({
//     size: 10, // 点的大小
//     color: 0xffffff, // 点的颜色
// });
// const points = new THREE.Points(geometry, material);
// export default points;

// /**
//  * 创建一个LineLoop对象，它表示一条线，连接了顶点。
//  * LineLoop对象需要一个几何体和一个材质。
//  */
// const material = new THREE.LineBasicMaterial({
//     color: 0xffffff,
// })
// const line = new THREE.LineLoop(geometry, material);
// export default line;

/**
 * 创建一个Mesh对象，它表示一个3D物体。
 * Mesh对象需要一个几何体和一个材质。
 */
const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
})
const mesh = new THREE.Mesh(geometry, material);
export default mesh;