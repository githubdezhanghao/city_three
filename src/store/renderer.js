import * as THREE from "three";

const createRenderer = () => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    return renderer;
};

export default createRenderer;
