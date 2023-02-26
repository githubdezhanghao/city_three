import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const gltfLoader = (url, onLoad) => {
    const loader = new GLTFLoader();
    loader.load(
        url,
        (gltf) => {
            gltf.scene.traverse((child) => {
                if (child.isMesh) {
                    // TODO: 在此处修改网格材质等操作
                }
            });
            onLoad(gltf.scene);
        },
        undefined,
        (error) => {
            console.error(`Failed to load GLTF: ${url}.`, error);
        }
    );
};

export default gltfLoader;
