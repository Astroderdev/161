AFRAME.registerComponent("throw", {
    init: function () {
        this.throwballs()
    },

    throwballs: function () {
        window.addEventListener("keydown", (e) => {
            if (e.key == "z") {
                console.log("done");
                var ball = document.createElement("a-entity");

                ball.setAttribute("gltf-model", "./models/ball/scene.gltf")

                var camera = document.querySelector('#camera').object3D;

                // get the camera direction as Three.js Vector

                var direction = new THREE.Vector3();
                camera.getWorldDirection(direction);

                // set the velocity and it's direction
                ball.setAttribute("velocity", direction.multiplyScalar(-10));

                ball.setAttribute("scale", { x: 3, y: 3, z: 3 });

                pos = camera.getAttribute("position");

                ball.setAttribute("position", { x: pos.x, y: pos.y - 1.2, z: pos.z });

                var scene = document.querySelector("#scene");

                scene.appendChild(ball);
            }
        });



        // get the camera 
    }
});