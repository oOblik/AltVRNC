# AltspaceVR Native Components
A JavaScript library for using AltspaceVR's native a-frame components.

### <b>Resources</b>
[Native Resources](https://altspacevr.github.io/aframe-altspace-component/doc/resources.html)<br>
[Native Component In-Depth Reference](https://altspacevr.github.io/aframe-altspace-component/doc/native.html)<br>
[TextMesh Pro Rich Text Formatting Reference](http://digitalnativestudios.com/textmeshpro/docs/rich-text/)<br>

### <b>Components</b>

* [n-object](#n-object)<br>
* [n-box-collider](#n-box-collider)<br>
* [n-sphere-collider](#n-sphere-collider)<br>
* [n-capsule-collider](#n-capsule-collider)<br>
* [n-mesh-collider](#n-mesh-collider)<br>
* [n-spawner](#n-spawner)<br>
* [n-skeleton-parent](#n-skeleton-parent)<br>
* [n-cockpit-parent](#n-cockpit-parent)<br>
* [n-container](#n-container)<br>
* [n-text](#n-text)<br>
* [n-billboard](#n-billboard)<br>
* [n-sound](#n-sound)<br>
* [n-portal](#n-portal)<br>
* [n-layout-browser](#n-layout-browser)<br>

---

### <a name="n-object">n-object</a>
#### Default Configuration
<blockquote>
	res: 'architecture/wall-4w-4h'<br>
</blockquote>

#### Example
```javascript
var config = { 
	res: 'effects/explosion' 
};

var explosion = new NativeComponent('n-object', config).addTo(scene);
```

---

### <a name="n-box-collider">n-box-collider</a>
#### Default Configuration
<blockquote>
	center: { 'x': 0, 'y': 0, 'z': 0 }<br>
	size: { 'x': 0, 'y': 0, 'z': 0 }<br>
	type: 'environment'<br>
</blockquote>

#### Example
```javascript
var testBox = new THREE.Mesh(
	new THREE.CubeGeometry(5, 5, 5), 
	new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

var config = { 
	size: { 'x': 3, 'y': 3, 'z': 3 }
};

var testBoxCollider = new NativeComponent('n-box-collider', config, testBox).addTo(scene);
```

---

### <a name="n-sphere-collider">n-sphere-collider</a>
#### Default Configuration
<blockquote>
	center: {  'x': 0, 'y': 0, 'z': 0  }<br>
	radius: 0<br>
	type: 'environment'<br>
</blockquote>

#### Example
```javascript
var testSphere = new THREE.Mesh(
	new THREE.SphereGeometry(3, 10, 10), 
	new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

var config = { 
	radius: 3 
};

var testSphereCollider = new NativeComponent('n-sphere-collider', config, testSphere).addTo(scene);
```

---

### <a name="n-capsule-collider">n-capsule-collider</a>
#### Default Configuration
<blockquote>
	center: { 'x': 0, 'y': 0, 'z': 0 }<br>
	radius: 0<br>
	height: 0<br>  
	direction: 'y'<br>  
	type: 'environment'<br>
</blockquote>

#### Example
```javascript
var testMesh = new THREE.Mesh(
	new THREE.CubeGeometry(1, 3, 1), 
	new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

var config = { 
	radius: 3 
};

var testSphereCollider = new NativeComponent('n-capsule-collider', config, testMesh).addTo(scene);
```

---

### <a name="n-mesh-collider">n-mesh-collider</a>
#### Default Configuration
<blockquote>
	convex: true<br>
	type: 'environment'<br>
</blockquote>

#### Example
```javascript
var testMesh = new THREE.Mesh(
	new THREE.SphereGeometry(3, 10, 10), 
	new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

var config = { 
	convex: true,
	type: 'environment'
};

var testMeshCollider = new NativeComponent('n-mesh-collider', config, testMesh).addTo(scene);
```

---

### <a name="n-spawner">n-spawner</a>
#### Default Configuration
<blockquote>
	res: 'interactables/basketball'
</blockquote>

#### Example
```javascript
var config = { 
	res: 'interactables/basketball' 
};

var testSpawner = new NativeComponent('n-spawner', config).addTo(scene, function(obj) {
	obj.position.set(0, 1, 0);
});
```

---

### <a name="n-skeleton-parent">n-skeleton-parent</a>

#### Default Configuration
<blockquote>
	part: 'head'<br>
	side: 'center'<br>
	index: 0<br>
	userId: null<br>
</blockquote>

#### Example
```javascript
var objSkelParent = new THREE.Mesh(
	new THREE.CubeGeometry(0.5, 0.5, 0.5),
	new THREE.MeshBasicMaterial({ color: 0xff0000, opacity: 0.7, transparent: true })
);

objSkelParent.position.set(0, 0.5, 0);

var config = {
	part: 'head'
};

var testSkeletonParent = new NativeComponent('n-skeleton-parent', config, objSkelParent).addTo(scene);
```

---

### <a name="n-cockpit-parent">n-cockpit-parent</a>
#### Default Configuration
	N/A
#### Example
```javascript
var objCockpitParent = new THREE.Mesh(
	new THREE.PlaneGeometry(0.08, 0.08),
	new THREE.MeshBasicMaterial({ color: 0xff0000, opacity: 0.7, transparent: true })
);

objCockpitParent.position.set(0.1, 0, -1);

var testCockpitParent = new NativeComponent('n-cockpit-parent', null, objCockpitParent).addTo(scene);
```

---

### <a name="n-container">n-container</a>
Currently untested and unsupported.

---

### <a name="n-text">n-text</a>

#### Default Configuration
<blockquote>
	text: ''<br>
	fontSize: 10<br>
	width: 10<br>
	height: 1<br>
	horizontalAlign: 'middle'<br>
	verticalAlign: 'middle'<br>
</blockquote>

#### Example
```javascript
var config = { text: 'Hello World!', fontSize: 10, horizontalAlign: 'middle' };

var testText = new NativeComponent('n-text', config).addTo(scene);
```
#### Notes

Reference for styling, coloring, and formatting text can be found here: [TextMesh Pro Rich Text Formatting Reference](http://digitalnativestudios.com/textmeshpro/docs/rich-text/) 

---

### <a name="n-billboard">n-billboard</a>
#### Default Configuration
	N/A
#### Example

```javascript
var testPlane = new THREE.Mesh(
	new THREE.PlaneGeometry(5, 5),
	new THREE.MeshBasicMaterial({ color: 0xffff00 })
);

var testBillboard = new NativeComponent('n-billboard', null, testPlane).addTo(scene);
```

---

### <a name="n-sound">n-sound</a>
#### Default Configuration
<blockquote>
	res: ''<br>
	src: ''<br>
	loop: false<br>
	volume: 1<br>
	autoplay: false<br>
	oneshot: false<br>
	spatialBlend: 1<br>
	pitch: 1<br>
	minDistance: 1<br>
	maxDistance: 12<br>
</blockquote>

#### Example

```javascript
var config = {
	autoplay: true,
	loop: false,
	src: 'test.mp3',
	volume: 0.5,
	minDistance: 50,
	maxDistance: 200
};

var testSound = new NativeComponent('n-sound', config).addTo(scene);

var testSoundCalls = function () {
	testSound.call('pause');
	testSound.call('seek', {time: 0});
	testSound.call('play');
};

setInterval(testSoundCalls, 5000);
```

---

### <a name="n-portal">n-portal</a>

#### Default Configuration
<blockquote>
	targetSpace: null<br>
	targetPosition: { 'x': 0, 'y': 0, 'z': 0 }<br>
	targetQuaternion: { 'x': 0, 'y': 0, 'z': 0, 'w': 0 }<br>
</blockquote>

#### Example
```javascript
var config = {
	targetPosition: {
		x: 10, y: 1, z: 0
	}
};

var testText = new NativeComponent('n-portal', config).addTo(scene);
```
#### Notes

If <b>targetSpace</b> is null, the portal will teleport the user within the current space using <b>targetPosition</b> and <b>targetQuaternion</b>.

---

### <a name="n-layout-browser">n-layout-browser</a>

#### Default Configuration
<blockquote>
	url: 'about:blank'<br>
	isEnclosure: false<br>
</blockquote>

#### Example
```javascript
var dummyMesh = new THREE.Mesh(
	new THREE.CubeGeometry(1, 1, 1)
);

dummyMesh.position.set(0, 5, 0);
dummyMesh.scale.set(10, 10, 10);

var config = {
	url: 'https://www.google.com',
	isEnclosure: true
};

var testText = new NativeComponent('n-layout-browser', dummyMesh).addTo(scene);
```
#### Notes

Due to AltspaceVR's limitations this will only spawn the enclosure once on the first creation of the space and it will persist for the lifetime of the space.

---