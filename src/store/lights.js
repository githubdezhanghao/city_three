import * as THREE from 'three';

function createLights(scene) {
    // 添加环境光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // 添加平行光1
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight1.position.set(-10, 10, 10);
    scene.add(directionalLight1);

    // 添加平行光2
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight2.position.set(10, -10, -10);
    scene.add(directionalLight2);

    // 添加点光源
    const pointLight = new THREE.PointLight(0xffffff, 0.5, 100);
    pointLight.position.set(0, 20, 10);
    scene.add(pointLight);

    // 添加聚光灯
    const spotLight = new THREE.SpotLight(0xffffff, 0.5);
    spotLight.position.set(0, 20, 0);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.05;
    spotLight.decay = 2;
    spotLight.distance = 200;
    scene.add(spotLight);

    return {
        ambientLight,
        directionalLight1,
        directionalLight2,
        pointLight,
        spotLight,
    };
}

export default createLights;
