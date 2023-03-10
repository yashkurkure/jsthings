import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import * as THREE from 'three';

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
