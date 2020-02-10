
  // globals:
  // drawObjects - draw list of scenegraph objects
  // objects - additional attributes of scenegraph objects, like transform, color, etc
  // Note: the first object is the skybox object (object type = 0)
  // Floating Waypoint billboards are added afterwards (object type = 1)
  // based on the twgl.js 'primitives' example: https://github.com/greggman/twgl.js/blob/master/examples/primitives.html
  var loadStereoTexture = function(preview, url) {
    if (!preview) return;
      var _cubeFaceOrder = (q.mono) ? [
          gl.TEXTURE_CUBE_MAP_POSITIVE_X,
          gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
          gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
          gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
          gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,
          gl.TEXTURE_CUBE_MAP_POSITIVE_Z
        ] : [
          gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
          gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
          gl.TEXTURE_CUBE_MAP_POSITIVE_X,
          gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,
          gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
          gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
        ];

    // bad GPU... IE11 cannot handle non-power-of-two, chrome mac intel iris cannot handle > 1024. 

    var isBadGpu = (isIEwin || gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE) < 1025) ? 1024 : null;

    twgl.createTexture(gl, {
        target: gl.TEXTURE_CUBE_MAP,
        cubeFaceOrder: _cubeFaceOrder,
        src: preview,
        isBadGpu: isBadGpu
    }, function(err, tex) {
        if (err) {console.log('error loading preview image');return;}
        objects[0].skyboxL = tex;
        objects[0].skyboxR = tex;
        drawObjects[0].uniforms.u_skybox = tex;
        if (q.mono) return;
        twgl.createTexture(gl, {
            target: gl.TEXTURE_CUBE_MAP,
            cubeFaceOrder: _cubeFaceOrder,
            src: url + ((q.flipLR) ? "R" : "L") + ".jpg",
            isBadGpu: isBadGpu
        }, function(err, tex) {
            if (err) {console.log('error:',err); return;}
            objects[0].skyboxL = tex;
            drawObjects[0].uniforms.u_skybox = tex;
          twgl.createTexture(gl, {
              target: gl.TEXTURE_CUBE_MAP,
              cubeFaceOrder: _cubeFaceOrder,
              src: url + ((q.flipLR) ? "L" : "R") + ".jpg",
              isBadGpu: isBadGpu
          }, function(err, tex) {
              objects[0].skyboxR = tex;
              drawObjects[0].uniforms.u_skybox = tex;
          });                
        });
    });
  };