import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function loadModel(url, scene) {
    const loader = new GLTFLoader();
    loader.load(url, (gltf) => {
        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                // 如果需要可以修改网格材质
                // child.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            }
        });
        scene.add(gltf.scene);
    });
}
