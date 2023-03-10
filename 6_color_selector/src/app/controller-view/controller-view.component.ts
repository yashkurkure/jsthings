import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import * as THREE from 'three';

@Component({
  selector: 'app-controller-view',
  templateUrl: './controller-view.component.html',
  styleUrls: ['./controller-view.component.css']
})
export class ControllerViewComponent implements OnInit{

    color: THREE.ColorRepresentation = 0x0000FF

    constructor(private data: DataService) {}

    ngOnInit(): void {
        this.data.currentColor.subscribe(color=>this.color = color);
    }


    toRed(){
        this.data.changeColor(0xFF0000)
    }

    toBlue(){
        this.data.changeColor(0x0000FF)
    }

    toGreen(){
        this.data.changeColor(0x00FF00)
    }

}
