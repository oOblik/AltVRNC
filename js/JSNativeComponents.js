var NativeComponentDefaults = {
	'n-object': {
		res: 'architecture/wall-4w-4h'
	},
	'n-spawner': {
		res: 'interactables/basketball'
	},
	'n-text': {
		text: '',
		fontSize: 10,
		width: 10,
		height: 1,
		horizontalAlign: 'middle',
		verticalAlign: 'middle'
	},
	'n-sphere-collider': {
		isTrigger: false,
		center: { 'x':0, 'y': 0, 'x': 0 },
		radius: 0,
		type: 'environment'
	},
	'n-box-collider': {
		isTrigger: false,
		center: { 'x':0, 'y': 0, 'x': 0 },
		size: { 'x':0, 'y': 0, 'x': 0 },
		type: 'environment'
	},
	'n-capsule-collider': {
		isTrigger: false,
		center: { 'x':0, 'y': 0, 'x': 0 },
		radius: 0,
		height: 0,
		direction: 'y',
		type: 'environment'
	},
	'n-mesh-collider': {
		isTrigger: false,
		convex: true,
		type: 'environment'
	},
	'n-container': {
		capacity: 4,
	},
	'n-sound': {
		on: '',
		res: '',
		src: '',
		loop: false,
		volume: 1,
		autoplay: false,
		oneshot: false,
		spatialBlend: 1,
		pitch: 1,
		minDistance: 1,
		maxDistance: 12,
	},
};

var NativeComponent = function (name, data, _mesh) {
	this.name = name || 'n-object';
	this.data = data || null;

	if(NativeComponentDefaults[this.name]) {
		this.data = Object.assign(NativeComponentDefaults[this.name], this.data);
	}
	
	if(_mesh && typeof _mesh === 'object') {
		this.mesh = _mesh;
	}
	
	return this.init();
};

NativeComponent.prototype.init = function() {
	if(!this.mesh) {
		var geometry = new THREE.BoxGeometry(1, 1, 1);
		var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		material.visible = false;

		this.mesh = new THREE.Mesh(geometry, material);
	}

	this.mesh.userData.altspace = this.mesh.userData.altspace || {};
	this.mesh.userData.altspace.collider = this.mesh.userData.altspace.collider || {};
	this.mesh.userData.altspace.collider.enabled = false;
	
	altspace.addNativeComponent(this.mesh, this.name);

	if(this.data) {
		this.update(this.data);
	}
	
	return this;
};

NativeComponent.prototype.remove = function() {
	altspace.removeNativeComponent(this.mesh, this.name);
	
	this.mesh.parent.remove(this.mesh);
	return this;
};

NativeComponent.prototype.update = function(oldData, callback) {
	this.data = Object.assign(this.data, oldData);
	altspace.updateNativeComponent(this.mesh, this.name, this.data );
	
	callback && callback(this.mesh);
	return this;
};

NativeComponent.prototype.call = function(functionName, functionArguments) {
	altspace.callNativeComponent(this.mesh, this.name, functionName, functionArguments);
	return this;
};

NativeComponent.prototype.getMesh = function(callback) {
	callback && callback(this.mesh);
	return this.mesh;
};

NativeComponent.prototype.addTo = function(parent, callback) {
	parent.add(this.mesh);
	
	callback && callback(this.mesh);
	return this;
};
