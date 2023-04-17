# Notes

- Import required for camera controls.
```
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
```

- Instantiate the orbit controls.
    ```
    const orbit = new OrbitControls(camera, renderer.domElement);
    ```
    - `renderer.domElement` is the **canvas** where the renderer draws its output.

- Everytime we **change the camera position** through our code we must update the orbit controls with the new information of the position.
    ```
    camera.position.set(3,3,7);
    // NEW: Call the update method everytime we change the position of the camera.
    orbit.update();
    ```