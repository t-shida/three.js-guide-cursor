var ThreeGuideCursor = function(params){
  this.scene = params.scene;
  this.scale = 0;
};

ThreeGuideCursor.prototype.render = function(){
  // X
  this._create_line({starting: [-1, 0, 0], ending: [1, 0, 0], color: 0xff0000});
  this._create_pointer({position: [1, 0, 0], rotation: [0, 0, - (Math.PI/2)], color: 0xff0000});

  // Y
  this._create_line({starting: [0, -1, 0], ending: [0, 1, 0], color: 0x008000});
  this._create_pointer({position: [0, 1, 0], rotation: [0, 0, 0], color: 0x008000});

  // Z
  this._create_line({starting: [0, 0, -1], ending: [0, 0, 1], color: 0x0000ff});
  this._create_pointer({position: [0, 0, 1], rotation: [Math.PI/2, 0, 0], color: 0x0000ff});
};

ThreeGuideCursor.prototype._create_line = function(params){
  var material = new THREE.LineBasicMaterial({color: params.color});
  var geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(params.starting[0], params.starting[1], params.starting[2]));
  geometry.vertices.push(new THREE.Vector3(params.ending[0], params.ending[1], params.ending[2]));
  var line = new THREE.Line(geometry, material);
  if (this.scale > 0) line.scale.set(this.scale, this.scale, this.scale);
  this.scene.add(line);
};

ThreeGuideCursor.prototype._create_pointer = function(params){
  var cylinder = new THREE.Mesh(
    new THREE.CylinderGeometry( 0, 0.05 * this.scale, 0.3 * this.scale, 8 * this.scale),
    new THREE.MeshLambertMaterial({color: params.color})
  );
  cylinder.position.set(params.position[0] * this.scale, params.position[1] * this.scale, params.position[2] * this.scale);
  cylinder.rotation.set(params.rotation[0], params.rotation[1], params.rotation[2]);
  this.scene.add(cylinder);
};
