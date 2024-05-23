import * as THREE from 'three';
// 引入GLTFLoader
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// 创建加载器
const loader = new GLTFLoader();

const model = new THREE.Group();

loader.load('./DXGC042501gltf.gltf',function(gltf){
    // console.log(gltf)
    // console.log('控制台查看gltf对象结构', gltf);
    console.log('场景3D模型树结构', gltf.scene);
    model.add(gltf.scene);
})

export default model;