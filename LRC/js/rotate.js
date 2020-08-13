AFRAME.registerComponent('rotate-with-camera', {
    tick: function (){

      if(this.el.sceneEl.camera){
        const {rotation} = this.el.sceneEl.camera.parent
        const containerRotation = this.el.getAttribute('rotation')
        this.el.setAttribute('rotation', {...containerRotation, z: containerRotation.z += rotation._x * Math.PI})
      }
    }
    })

   AFRAME.registerComponent('position-with-camera', {
    tick: function (){

      if(this.el.sceneEl.camera){
        const {rotation} = this.el.sceneEl.camera.parent
        const containerPosition = this.el.getAttribute('position')
        this.el.setAttribute('position', {...containerPosition, z: containerPosition.z += rotation._y/Math.PI})
      }
    }
    })

    AFRAME.registerComponent('rotation-reader', {
        tick: function () {
          // `this.el` is the element.
          // `object3D` is the three.js object.
      
        //   // `rotation` is a three.js Euler using radians. `quaternion` also available.
          console.log(this.el.object3D.rotation);
      
          // `position` is a three.js Vector3.
        //   console.log(this.el.object3D.position);
        const {rotation} = this.el.sceneEl.camera.parent
        const containerRotation = this.el.getAttribute('rotation')
        const y = containerRotation.y
        if(this.el.sceneEl.camera){
            this.el.setAttribute('rotation', {...containerRotation, y: (rotation.y*Math.PI)})
            // console.log(rotation);
            // this.el.object3D.rotation._y = rotation;
          }
        }
      });