import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import * as THREE from 'three';

/**
 * This Data Service contains data on the color of the sphere that
 * is rendered by WebGL in the canvas-box component.
 * 
 * The data service is used by the controller-view component that 
 * updates the color when the user presses a button.
 * 
 * To read/write/listen to changes to the data in the data service,
 * the components subscribe to it. The subscription is capabale of taking
 * handlers that are executed when the data changes.
 * 
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {

    private colorSource = new BehaviorSubject<THREE.ColorRepresentation>(0xFF0000)
    currentColor = this.colorSource.asObservable();

    changeColor(color: THREE.ColorRepresentation){
        this.colorSource.next(color);
    }
}
