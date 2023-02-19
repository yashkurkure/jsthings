import * as THREE from 'three';

// NEW: Import the OrbitControls for camera controls using mouse
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'


// Renderer, Scene and Camera setup
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);


// NEW: Instantiate the OribitControls class.
const orbit = new OrbitControls(camera, renderer.domElement);


const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

camera.position.set(3,3,7);
// NEW: Call the update method everytime we change the position of the camera.
orbit.update();


// Adding a box to the scene
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

// Adding rotaion to the box
function animate(){
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    renderer.render(scene, camera);
}

// Set the animation loop
renderer.setAnimationLoop(animate);