var NativeComponent = function (name, data, _mesh) {
	this.isInit = false;
	this.name = name || "n-object";
	this.data =  data || {};

	var placeholderGeometry = new THREE.BoxGeometry(0.001, 0.001, 0.001);
	var placeholderMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	placeholderMaterial.visible = false;

	var PlaceholderMesh = function () {
		THREE.Mesh.call( this, placeholderGeometry, placeholderMaterial );
	};
	
	PlaceholderMesh.prototype = Object.create( THREE.Mesh.prototype );
	PlaceholderMesh.prototype.constructor = THREE.PlaceholderMesh;
		
	if(_mesh && typeof _mesh === "object") {
		this.mesh = mesh;
	} else {
		this.mesh = new PlaceholderMesh();
	}
	
	this.init();
};

NativeComponent.prototype.init = function() {
	if(!this.isInit) {
		this.mesh.userData.altspace = this.mesh.userData.altspace || {};
		this.mesh.userData.altspace.collider = this.mesh.userData.altspace.collider || {};
		this.mesh.userData.altspace.collider.enabled = false;

		altspace.addNativeComponent(this.mesh, this.name);
		this.update(this.data);
	}
	
	this.isInit = true;
	
	return this;
};

NativeComponent.prototype.remove = function() {
	altspace.removeNativeComponent(this.mesh, this.name);
	
	return this;
};

NativeComponent.prototype.update = function(oldData, callback) {
	this.data = Object.assign(this.data, oldData);
	altspace.updateNativeComponent(this.mesh, this.name, this.data );
	
	callback && callback( this.mesh );
	return this;
};

NativeComponent.prototype.call = function(functionName, functionArguments) {
	altspace.callNativeComponent(this.mesh, this.name, functionName, functionArguments);
	return this;
};

NativeComponent.prototype.getMesh = function() {
	return this.mesh;
};

NativeComponent.prototype.addTo = function(parent) {
	parent.add(this.mesh);
	return this;
};
