import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CanvasBoxComponent } from './canvas-box/canvas-box.component';
import { ControllerViewComponent } from './controller-view/controller-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasBoxComponent,
    ControllerViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
