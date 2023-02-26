import * as THREE from "three";

const createCamera = () => {
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        5000
    );
    camera.position.z = 500;

    return camera;
};

export default createCamera;
