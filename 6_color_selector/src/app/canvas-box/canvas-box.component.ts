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

    // The color of the sphere.
    color: THREE.ColorRepresentation = 0x000000;

    // The sphere in the scene.
    sphere!: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>;

    // The plane in the scene.
    plane!: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;

    // Canvas that WebGL draws on.
    canvas!: HTMLElement | null;

    // WebGL Renderer.
    renderer!: THREE.WebGLRenderer;

    // The scene.
    scene!: THREE.Scene;

    // The camera that captures the scene.
    camera!: THREE.PerspectiveCamera;

    // Orbit controls allow controlling the camera.
    orbit!: OrbitControls;

    // Constructor.
    constructor(private data: DataService) {
    }

    //On Initialization of the component.
    ngOnInit(): void {

        // Setup for WebGL.
        this.WebGLSetup();

        // Add things to the scene.
        this.addToScene();

        // Subscribe to the data service.
        // This allows the color of the sphere to be changed.
        this.data.currentColor.subscribe(color=>{
            this.color = color;
            this.sphere.material.color = new THREE.Color(color)
        });

        // Start the animation.
        this.startAnimation();
    }


    // Setup the scene.
    WebGLSetup(){
        this.canvas = document.getElementById('canvas-box');
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas!,
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        this.camera.position.set(-10,30,30);
        this.orbit = new OrbitControls(this.camera, this.renderer.domElement);
    }

    // Create the plane geometry.
    intializePlaneGeometry() : THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial> {
        const planeGeometry = new THREE.PlaneGeometry(
            30, // 1st dimension of the plane (x)
            30  // 2nd dimension of th plane (y)
        );
        const PlaneMaterial = new THREE.MeshBasicMaterial({
            color: 0xFFFFFF, // Color of the plane
            side: THREE.DoubleSide // Apply material to both sides of the plane
        });
        const plane = new THREE.Mesh(planeGeometry, PlaneMaterial);
        plane.rotation.x = -0.5 * Math.PI;
        return plane;
    }

    // Create the sphere geometry.
    intializeSphereGeometry() : THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>{
        const sphereGeometry = new THREE.SphereGeometry(4, 50, 50);
        const sphereMaterial = new THREE.MeshBasicMaterial({
            color: this.color,
            wireframe: true //Display as a wire frame
        });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(0, 0, 0)
        return sphere;
    }

    // Adds the spehere and the plane to the scene.
    addToScene(){
        const plane = this.intializePlaneGeometry();
        this.scene.add(plane);

        this.sphere = this.intializeSphereGeometry();
        this.scene.add(this.sphere);
    }
   
    // Start the animation.
    startAnimation(): void {
        let step = 0;
        let speed = 0.01;
        const animateGeometry = () => {
            
            step += speed;
            this.sphere.position.y = 10*Math.abs(Math.sin(step)) + 4;

            // Render.
            this.renderer.render(this.scene, this.camera);

            // Call animateGeometry again on the next frame.
            window.requestAnimationFrame(animateGeometry);
        };

        animateGeometry();
    }
}
