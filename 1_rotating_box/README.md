# Setting up Three JS

- Init the project
```
npm init -y
```

- Install a bundler
```
npm install parcel -g //For installing on your machine
npm install parcel --save-dev // Installing local to project
```

- Install THREE
```
npm install three
```

# Project setup
```
\
|---dist: generated files are here
|---node_modules: dependencies
|---src
      |---index.html: the web page
      |---js
           |---script.js: javascript code that may run on our webpage
|---.gitignore: lists files ignored by git
|---package.json: The heart of any Node project. It records important metadata about a project.
```

# Running the project
```
npm install
parcel ./src/index.html or npm run serve
```

# Notes
- Renderer: The WebGL renderer that manages the canvas.
```
// Creating a renderer
const renderer = new THREE.WebGLRenderer();

// Specify the canvas width and height
renderer.setSize(<width>, <height>);
```

- Scene: This is where the objects are rendered. Objects can be added to the scene using the `add()` method on the instance of the scene.

- Camera: The camera is the POV of the user. The user looks at the scene through this camera. The positioning of the camera is what enables the user to see the scene from different perspectives.
    - Feild of view, this is an angle that specifies the field of view of the camera
    ```
            |_|
           /   \
          /     \
         /       \
        /         \
      <field of view>
    ```
    - The **aspect ratio** dictates the dimensions of the planes the camera views.

    - **Near clipping plane**: everything that does not show up on here is "behind the camera". Anything that does not show up on this plane is out of the feild of view of the camera.

    ```
            |_|
           /   \
          /     \
          -------  <------near clipping plane
        /         \
       /           \
      <field of view>
    ```

    - **Far clipping plane**: eveything that is too far to be rendered.
    ```
            |_|
           /   \
          /     \
        -----------  <------near clipping plane
        /         \
       /           \
     -----------------  <------far clipping plane
     /               \
      <field of view>
    ```

    - Only the objects between the near and far clipping planes can be seen by the camera. Everything else is not rendered, or just "Clipped" out.