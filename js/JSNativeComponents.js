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
	'n-browser': {
		url: 'http://www.google.com/',
		controls: 'hidden'
	},
};

var NativeComponent = function (name, data, _object) {
	this.name = name.toLowerCase() || 'n-object';
	this.data = data || null;
	this.inClient = (altspace && altspace.inClient);

	if(NativeComponentDefaults[this.name]) {
		this.data = Object.assign({}, NativeComponentDefaults[this.name], this.data);
	}
	
	if(_object && (_object instanceof THREE.Object3D || _object instanceof THREE.Mesh || _object instanceof THREE.Group)) {
		this.object = _object;
	} else {
		var geometry = new THREE.BoxGeometry(1, 1, 1);
		var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		material.visible = (this.data && this.data.visible) ? true : false;

		this.object = new THREE.Mesh(geometry, material);
	}
	
	switch(this.name) {
		case 'n-mesh-collider':
			var NC = this;
			
			this.object.traverse(function (childObj) {
				if (childObj instanceof THREE.Mesh) {
					NC.init(childObj);
				}
			});
			return this;
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
			
			return this.init(this.object);
		break;
		default:
			return this.init(this.object);
	}
};

NativeComponent.prototype.init = function(object) {
	object.userData.altspace = object.userData.altspace || {};
	object.userData.altspace.collider = object.userData.altspace.collider || {};
	object.userData.altspace.collider.enabled = false;
	
	if(this.inClient) altspace.addNativeComponent(object, this.name);
	if(this.data) altspace.updateNativeComponent(object, this.name, this.data);
	
	return this;
};

NativeComponent.prototype.remove = function(andMesh) {
	if(this.object) {
		if(this.inClient) altspace.removeNativeComponent(this.object, this.name);
		
		if(andMesh) this.object.parent.remove(this.object);
	}
	return this;
};

NativeComponent.prototype.update = function(newData, callback) {
	if(this.object) {
		this.data = Object.assign({}, this.data, newData);
		if(this.inClient) altspace.updateNativeComponent(this.object, this.name, this.data );
		
		callback && callback(this.object);
	}
	return this;
};

NativeComponent.prototype.call = function(functionName, functionArguments) {
	if(this.object) {
		if(this.inClient) altspace.callNativeComponent(this.object, this.name, functionName, functionArguments);
		
		callback && callback(this.object);
	}
	return this;
};

NativeComponent.prototype.getObject = function(callback) {
	if(!this.object) return false;
	
	callback && callback(this.object);
	return this.object;
};

NativeComponent.prototype.addTo = function(parent, callback) {
	if(this.object) {
		parent.add(this.object);
		
		callback && callback(this.object);
	}
	return this;
};
