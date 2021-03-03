<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import * as Three from 'three'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import api from "@/api/index.js";

export default {
  name: "LoadGltf",
  data() {
    return {
      model_container: undefined,
      height: 0,
      width: 0,
      scene: undefined,
      camera: undefined,
      renderer: undefined,
      orbitControls: undefined,
      loader: undefined,
      ambientLight: undefined,
      directionalLight: undefined,
      planeGeometry: undefined,
      planeMaterial: undefined,
      plane: undefined,

    }
  },
  methods: {
    initModelContainer() {
      this.model_container = document.getElementById("container");
      this.model_container.style.height = window.innerHeight + "px";
      this.model_container.style.width = window.innerWidth + "px";
      this.height = this.model_container.clientHeight;
      this.width = this.model_container.clientWidth;
    },
    initRender() {
      this.renderer = new Three.WebGLRenderer({antialias: true});
      this.renderer.setSize(this.width, this.height);
      // 兼容高清屏幕
      this.renderer.setPixelRatio(window.devicePixelRatio);
      // 消除canvas的外边框
      this.renderer.domElement.style.outline = "none";
      //告诉渲染器需要阴影效果
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = Three.PCFSoftShadowMap; // 默认的是，没有设置的这个清晰 THREE.PCFShadowMap
      this.model_container.appendChild(this.renderer.domElement);
    },
    initCamera() {
      this.camera = new Three.PerspectiveCamera(70, this.width / this.height, 0.01, 1000);
      this.camera.position.set(0, 100, 200);
      this.camera.lookAt(new Three.Vector3(0, 0, 0));
    },
    initScene() {
      this.scene = new Three.Scene();
    },
    initGui(){},
    initLight() {
      this.ambientLight = new Three.AmbientLight("#111111");
      this.scene.add(this.ambientLight);

      this.directionalLight = new Three.DirectionalLight("#ffffff");
      this.directionalLight.position.set(40, 60, 10);
      this.directionalLight.shadow.camera.near = 1; //产生阴影的最近距离
      this.directionalLight.shadow.camera.far = 400; //产生阴影的最远距离
      this.directionalLight.shadow.camera.left = -50; //产生阴影距离位置的最左边位置
      this.directionalLight.shadow.camera.right = 50; //最右边
      this.directionalLight.shadow.camera.top = 50; //最上边
      this.directionalLight.shadow.camera.bottom = -50; //最下面

      //这两个值决定生成阴影密度 默认512
      this.directionalLight.shadow.mapSize.height = 1024;
      this.directionalLight.shadow.mapSize.width = 1024;

      //告诉平行光需要开启阴影投射
      this.directionalLight.castShadow = true;

      this.scene.add(this.directionalLight);
    },
    initModel() {
      //底部平面
      this.planeGeometry = new Three.PlaneGeometry(100, 100);
      this.planeMaterial = new Three.MeshLambertMaterial({color: 0xaaaaaa, side: Three.DoubleSide});
      this.plane = new Three.Mesh(this.planeGeometry, this.planeMaterial);
      this.plane.rotation.x = -0.5 * Math.PI;
      this.plane.position.y = -.1;
      this.plane.receiveShadow = true; //可以接收阴影
      this.scene.add(this.plane);

      //创建gltf加载器
      let vm = this;
      vm.loader = new GLTFLoader();
      const resolve = gltf => {
        console.log('gltf', gltf);
        gltf.scene.scale.set(.1,.1,.1);
        vm.scene.add(
            gltf.scene
        );
      }
      // called while loading is progressing
      const loading = xhr => console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      // called when loading has errors
      const reject = error => console.log(error);
      vm.loader.load('./vikingroom.glb', resolve, loading, reject);
      // vm.loader.load(resourceURL, resolve, loading, reject);
    },
    initControl() {
      this.orbitControls = new OrbitControls(
          this.camera,
          this.renderer.domElement
      );
      // 惯性
      this.orbitControls.enableDamping = true;
      // 动态阻尼系数
      this.orbitControls.dampingFactor = 0.25;
      // 缩放
      this.orbitControls.enableZoom = true;
      // 右键拖拽
      this.orbitControls.enablePan = true;
      // 水平旋转范围
      this.orbitControls.maxAzimuthAngle = Math.PI / 6;
      this.orbitControls.minAzimuthAngle = -Math.PI / 6;
      // 垂直旋转范围
      this.orbitControls.maxPolarAngle = Math.PI / 6;
      this.orbitControls.minPolarAngle = -Math.PI / 6;
    },
    render() {

      this.control.update();

      this.renderer.render(this.scene, this.camera);
    },
    onWindowResize() {

      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);

    },
    animate() {
      //更新控制器
      // this.render();
      //更新性能插件
      // this.stats.update();
      requestAnimationFrame(this.animate);
    },
    initLoader() {
      let vm = this;
      // gltf模型加载器
      vm.loader = new GLTFLoader();
      // resource URL
      // let resourceURL = 'http://localhost:9300/opt/vikingroom.glb';

      let resourceURL = 'http://localhost:9300/opt/vikingroom.glb';
      // let resourceLocal = 'vikingroom.gltf';
      // saveAs(resourceURL, resourceLocal);
      // called when the resource is loaded
      const resolve = gltf => {
        console.log(gltf);
        vm.scene.add(
            gltf.scene
        );
      }
      // called while loading is progressing
      const loading = xhr => console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      // called when loading has errors
      const reject = error => console.log(error);
      // vm.loader.load('./vikingroom.glb', resolve, loading, reject);
      vm.loader.load('./gltf/scene.gltf', resolve, loading, reject);
      // vm.loader.load(resourceURL, resolve, loading, reject);
    },
    draw() {
      this.initModelContainer();
      // this.initGui();
      this.initRender();
      this.initScene();
      this.initCamera();
      this.initLight();
      this.initModel();
      // this.initStats();
      this.initControl();
      this.animate();
      window.onresize = this.onWindowResize;
    },
  },
  created() {
  },
  mounted() {
    this.draw();
  }
}
</script>

<style scoped>
#container {
  width: 500px;
  height: 500px;
}
</style>
