import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(72,window.innerWidth/window.innerHeight,0.1,1000)

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera,renderer.domElement )

const geometry = new THREE.BoxGeometry(2,1,1);
const material = new THREE.MeshLambertMaterial({color: 0x00aabb});
const cube = new THREE.Mesh(geometry,material);
cube.position.x = -5
scene.add(cube);

const geometry2 = new THREE.BoxGeometry(2,1,1);
const material2 = new THREE.MeshLambertMaterial({color: 0x00aabb});
const cube2 = new THREE.Mesh(geometry2,material2);
cube2.position.x = -1
scene.add(cube2);

const light = new THREE.PointLight(0xffffff, 1001);
light.position.set(0,5,0); //x,y,z
scene.add(light);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const SphereGeometry = new THREE.SphereGeometry(1,62,62);
const sphereMaterial = new THREE.MeshLambertMaterial({color:0xff00ff})
const sphere = new THREE.Mesh(SphereGeometry, sphereMaterial);
scene.add(sphere);

const torusGeometry = new THREE.TorusGeometry(3,1,64,64);
const torusMaterial = new THREE.MeshLambertMaterial({color:0x00ccaa});
const torus = new THREE.Mesh(torusGeometry,torusMaterial);
scene.add(torus);

camera.position.z = 5

function animate(){
    requestAnimationFrame(animate);

    cube.rotation.x += 0.02
    cube.rotation.y += 0.02
    cube2.rotation.x += 0.02
    cube2.rotation.y += 0.02
    torus.rotation.x += 0.01
    torus.rotation.y += 0.01

    renderer.render(scene,camera);
}
animate();