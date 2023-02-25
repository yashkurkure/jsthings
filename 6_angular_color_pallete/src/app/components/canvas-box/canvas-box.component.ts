import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'


@Component({
  selector: 'app-canvas-box',
  templateUrl: './canvas-box.component.html',
  styleUrls: ['./canvas-box.component.css']
})
export class CanvasBoxComponent implements OnInit {


    ngOnInit(): void {
     this.createThreeJsBox();
    }
   
    createThreeJsBox(): void {

        // Setup
        const canvas = document.getElementById('canvas-box');
        const scene = new THREE.Scene();
        if (!canvas) {
            return;
            }
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        // Instantiate the OribitControls class.
        const orbit = new OrbitControls(camera, renderer.domElement);

        // window.addEventListener('resize', () => {
        // canvasSizes.width = window.innerWidth;
        // canvasSizes.height = window.innerHeight;
    
        // camera.aspect = canvasSizes.width / canvasSizes.height;
        // camera.updateProjectionMatrix();
    
        // renderer.setSize(canvasSizes.width, canvasSizes.height);
        // renderer.render(scene, camera);
        // });

        const axesHelper = new THREE.AxesHelper(5);
        scene.add(axesHelper);

        camera.position.set(-10,30,30);
        orbit.update();


        // Adding a box to the scene
        // Phase 1: The geometry.
        const boxGeometry = new THREE.BoxGeometry();
        // Phase 2: Material of the object.
        const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});
        // Phase 3: Fusion of the geometry and the material. The result if a mesh.
        const box = new THREE.Mesh(boxGeometry, boxMaterial);
        scene.add(box);

        // NEW: Adding a plane to the scene
        const planeGeometry = new THREE.PlaneGeometry(
            30, // 1st dimension of the plane (x)
            30 //2nd dimension of th plane (y)
        );
        const PlaneMaterial = new THREE.MeshBasicMaterial({
            color: 0xFFFFFF, // Color of the plane
            side: THREE.DoubleSide // Apply material to both sides of the plane
        });
        const plane = new THREE.Mesh(planeGeometry, PlaneMaterial);
        scene.add(plane);

        // NEW: rotating a plane
        plane.rotation.x = -0.5 * Math.PI;

        // NEW: Adding a gird helper
        const girdHelper = new THREE.GridHelper(
            30, // size of the grid
        );
        scene.add(girdHelper);

        //NEW: Adding a sphere
        const sphereGeometry = new THREE.SphereGeometry(4, 50, 50);
        const sphereMaterial = new THREE.MeshBasicMaterial({
            color: 0x0000FF,
            wireframe: true //Display as a wire frame
        });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        scene.add(sphere);

        sphere.position.set(-10, 10, 0)

        const clock = new THREE.Clock();

        let step = 0;
        let speed = 0.01;
        const animateGeometry = () => {
            const elapsedTime = clock.getElapsedTime();

            // Update animation objects
            box.rotation.x += 0.01;
            box.rotation.y += 0.01;

            step += speed;
            sphere.position.y = 10*Math.abs(Math.sin(step)) + 4;

            // Render
            renderer.render(scene, camera);

            // Call animateGeometry again on the next frame
            window.requestAnimationFrame(animateGeometry);
        };

        animateGeometry();
        }
   }
