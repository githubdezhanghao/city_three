import * as THREE from 'three';
window.THREE = THREE;
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import createLights from './store/lights';
import { loadModel } from './store/model';
import createRenderer from "./store/renderer.js";

import createScene from './store/scene';
import createCamera from './store/camera';
const loader = new GLTFLoader();
console.log(loader);
// 创建渲染器、场景、相机、光源和模型
const renderer = createRenderer();
const scene = createScene();
const camera = createCamera();
const lights = createLights(scene);
const { ambientLight, directionalLight } = lights;

// 先添加模型到场景中
const model = await loadModel('model/test.glb');
scene.add(model);

// 创建控制器
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// 添加到DOM节点
const app = document.querySelector('#app');
app.appendChild(renderer.domElement);

// 设置相机位置
camera.position.set(100, 500, 1000);

// 渲染循环
function render() {
    requestAnimationFrame(render);
    controls.update();

    // 渲染场景和灯光
    renderer.render(scene, camera);
}
render();
