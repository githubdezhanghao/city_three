import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
export const loadModel = async (path) => {
    const loader = new GLTFLoader();
    const data = await loader.loadAsync(path);
    return data.scene;
};

export default async function initModel(scene, path) {
    const model = await loadModel(path);
    scene.add(model);
}
