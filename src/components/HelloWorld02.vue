<template>
  <div ref="canvas"></div>
</template>
<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export default {
  mounted() {
    this.loader = new GLTFLoader();
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.$refs.canvas.appendChild(this.renderer.domElement);
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;
    this.scene.add(this.camera);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(0, 5000, 0); // 将点光源放在模型中心的上方
    this.scene.add(pointLight);

    // 添加环境光
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    this.scene.add(ambientLight);
    const spotLight = new THREE.SpotLight(0xffffff, 1, 0, Math.PI / 2);
    spotLight.position.set(0, 5000, 0);
    spotLight.target.position.set(0, 0, 0); // 聚光灯的目标为模型中心
    this.scene.add(spotLight);
    this.scene.add(spotLight.target);

    this.loader.load("/model/test.glb", (gltf) => {
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          // 如果需要可以修改网格材质
          // child.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        }
      });
      // 创建控制器
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true; // 添加惯性
      this.scene.add(gltf.scene);

      this.animate();
    });
  },
  methods: {
    animate() {
      // 更新控制器
      this.controls.update();
      // 渲染Three.js场景
      this.renderer.render(this.scene, this.camera);

      // 请求动画帧，使动画循环执行
      requestAnimationFrame(this.animate);
    },
  },
};
</script>
