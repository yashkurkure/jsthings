# Notes

This example shows:
1. Communicating between Angular components using a Data Service
2. Displaying WebGL Grpahics
3. Updating scenes that WebGL renderes from another component

The project consists a canvas and a 3 buttons `Red`, `Green` and `Blue`.

The canvas is part of the `canvas-box` component and the buttons are part of the `controller-view` component.

The canvas is setup to animate a bouncing sphere. Initally the sphere's color is Red. When the user presses the buttons, the sphere's color is changed to the desirted color. This is done using the `DataService` defined in `data.service.js`.

Refer to the [Add Services](https://angular.io/tutorial/tour-of-heroes/toh-pt4) tutorial by Angular to create a service using Angular CLI.

The service you create can then be injected into the classes of the components that want to subscribe to it. The component can subscribe/listen to changes in data stored in the sevice. The component can also update the data in the service if the service exposes a method to do so.
