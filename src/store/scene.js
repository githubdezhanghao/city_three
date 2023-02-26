import * as THREE from "three";
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'


const createScene = () => {
    const scene = new THREE.Scene();

    // 点光源
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // 环境光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // 平行光1
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight1.position.set(1, 1, 1);
    scene.add(directionalLight1);

    // 平行光2
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight2.position.set(-1, 1, 0);
    scene.add(directionalLight2);

    const rgbeLoader = new RGBELoader()
    rgbeLoader.loadAsync('textures/027.hdr').then((texture) => {
        scene.background = texture
    })

    return scene;
};

export default createScene;
