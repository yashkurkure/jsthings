import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {DataService} from '../data.service';

@Component({
  selector: 'app-canvas-box',
  templateUrl: './canvas-box.component.html',
  styleUrls: ['./canvas-box.component.css']
})
export class CanvasBoxComponent implements OnInit {

    color: THREE.ColorRepresentation = 0x000000;
    sphere!: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>;

    constructor(private data: DataService) {}

    ngOnInit(): void {
     this.data.currentColor.subscribe(color=>{
        this.color = color;
        this.sphere.material.color = new THREE.Color(color)
    });
     this.createThreeJsBox();
    }

    intializePlaneGeometry(){

    }

    intializeSpehereGeometry(){

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

        camera.position.set(-10,30,30);
        orbit.update();

        // NEW: Adding a plane to the scene
        const planeGeometry = new THREE.PlaneGeometry(
            30, // 1st dimension of the plane (x)
            30  // 2nd dimension of th plane (y)
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
            color: this.color,
            wireframe: true //Display as a wire frame
        });
        this.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        scene.add(this.sphere);

        this.sphere.position.set(0, 0, 0)

        const clock = new THREE.Clock();

        let step = 0;
        let speed = 0.01;
        const animateGeometry = () => {
            step += speed;
            this.sphere.position.y = 10*Math.abs(Math.sin(step)) + 4;

            // Render
            renderer.render(scene, camera);

            // Call animateGeometry again on the next frame
            window.requestAnimationFrame(animateGeometry);
        };

        animateGeometry();
        }
   }
