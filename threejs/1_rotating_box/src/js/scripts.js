import * as THREE from 'three';


// WebGL renderer.
const renderer = new THREE.WebGLRenderer();

// Specify the rendering space.
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// Set up the scene where we can render objects.
const scene = new THREE.Scene();

// Set up the camera through which we are viewing the scene.
// Perspective Camera cares about the depth.
const camera = new THREE.PerspectiveCamera(
    75, // the feild of view of the camera (preferred range 40-80).
    window.innerWidth/window.innerHeight, // aspect ratio - canvas takes the szie of the window.
    0.1, // near clipping plane.
    1000 // far clipping plane.
);


// Draws the axes onto the scene as helpers.
const axesHelper = new THREE.AxesHelper(
    5 //the length of the axes.
);

// Add the axes helper to the scene.
scene.add(axesHelper);


// Change the position of the camera
// Default position is 0,0,0
camera.position.set(3,3,7);


// Adding a box to the scene
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

// Adding rotaion to the box
function animate(){
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    // Render using out scene and camera
    renderer.render(scene, camera);
}

// Set the animation loop
renderer.setAnimationLoop(animate);