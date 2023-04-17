# Notes

## Adding a UI interface

1. Install dat.gui:
    ```
    npm install dat.gui
    ```

2. Import the module into your `script.js` file:
    ```
    import * as dat from 'dat.gui';
    ```
3. Create an instance of the gui class.
    ```
    const gui = new dat.GUI();
    ```
4. Create the color options for the GUI.
    ```
    const options = {
        sphereColor" '#...'
    }
    ```

5. Add the color options to the gui. Also add a callback to specify what happens when the GUI is interacted with.
    ```
    gui.addColor(options, 'sphereColor').onChange(function(e){
        sphere.material.color.set(e);
    });
    ```
