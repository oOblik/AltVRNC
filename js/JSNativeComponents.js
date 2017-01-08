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
		center: {
			'x': 0, 'y': 0, 'x': 0
		},
		radius: 0,
		type: 'environment'
	},
	'n-box-collider': {
		isTrigger: false,
		center: {
			'x': 0, 'y': 0, 'x': 0
		},
		size: { 
			'x': 0, 'y': 0, 'x': 0
		},
		type: 'environment'
	},
	'n-capsule-collider': {
		isTrigger: false,
		center: { 
			'x': 0, 'y': 0, 'x': 0
		},
		radius: 0,
		height: 0,
		direction: 'y',
		type: 'environment'
	},
	'n-mesh-collider': {
		isTrigger: false,
		convex: false,
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
	this.inClient = (altspace && altspace.inClient);

	
	if(NativeComponentDefaults[this.name]) {
		this.data = Object.assign({}, NativeComponentDefaults[this.name], this.data);
	}
	
	if(_mesh && _mesh instanceof THREE.Mesh) {
		this.mesh = _mesh;
	} else {
		var geometry = new THREE.BoxGeometry(1, 1, 1);
		var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		material.visible = (this.data && this.data.visible) ? true : false;

		this.mesh = new THREE.Mesh(geometry, material);
	}
	
	switch(this.name) {
		case 'n-mesh-collider':
			var NC = this;
			
			this.mesh.traverse(function (childObj) {
				if (childObj instanceof THREE.Mesh) {
					NC.init(childObj);
				}
			}.bind(this));
		break;
		case 'n-sound':
			var src = this.data.src;
			if (src && !src.startsWith('http')) {
				if (src.startsWith('/')) {
					this.data.src = location.origin + src;
				}
				else {
					var currPath = location.pathname;
					if (!currPath.endsWith('/')) {
						currPath = location.pathname.split('/').slice(0, -1).join('/') + '/';
					}
					this.data.src = location.origin + currPath + src;
				}
			}
		break;
		default:
	}
	
	return this.init(this.mesh);
};

NativeComponent.prototype.init = function(mesh) {
	mesh.userData.altspace = mesh.userData.altspace || {};
	mesh.userData.altspace.collider = mesh.userData.altspace.collider || {};
	mesh.userData.altspace.collider.enabled = false;
	
	if(this.inClient) altspace.addNativeComponent(mesh, this.name);
	if(this.data) this.update(this.data);
	
	return this;
};

NativeComponent.prototype.remove = function(andMesh) {
	if(this.mesh) {
		if(this.inClient) altspace.removeNativeComponent(this.mesh, this.name);
		
		if(andMesh) this.mesh.parent.remove(this.mesh);
	}
	return this;
};

NativeComponent.prototype.update = function(oldData, callback) {
	if(this.mesh) {
		this.data = Object.assign({}, this.data, oldData);
		if(this.inClient) altspace.updateNativeComponent(this.mesh, this.name, this.data );
		
		callback && callback(this.mesh);
	}
	return this;
};

NativeComponent.prototype.call = function(functionName, functionArguments) {
	if(this.mesh) {
		if(this.inClient) altspace.callNativeComponent(this.mesh, this.name, functionName, functionArguments);
	
		callback && callback(this.mesh);
	}
	return this;
};

NativeComponent.prototype.getMesh = function(callback) {
	if(!this.mesh) return false;
	
	callback && callback(this.mesh);
	return this.mesh;
};

NativeComponent.prototype.addTo = function(parent, callback) {
	if(this.mesh) {
		parent.add(this.mesh);
		
		callback && callback(this.mesh);
	}
	return this;
};
