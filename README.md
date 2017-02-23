# AltspaceVR Native Components JS
A library for using Altspace's native components.

## Components
[Native resources](https://altspacevr.github.io/aframe-altspace-component/doc/resources.html)

[In-depth reference for each native component](https://altspacevr.github.io/aframe-altspace-component/doc/native.html)

**All config options below are the default values.**

---
### n-object
#### config
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res: 'architecture/wall-4w-4h'
#### example
```javascript

var config = { res: 'effects/explosion' };
var explosion = new NativeComponent('n-object', config).addTo(scene);

```
---
### n-box-collider
#### config
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isTrigger: false  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;center: { 'x': 0, 'y': 0, 'x': 0 }  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;size: { 'x': 0, 'y': 0, 'x': 0 }  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: 'environment'
#### example
```javascript

var geometry = new THREE.BoxGeometry(5, 5, 5);
var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
var testBox = new THREE.Mesh(geometry, material);
testBox.position.set(-10, 0, 0);

var config = { size: { 'x': 3, 'y': 3, 'x': 3 }  };
var testBoxCollider = new NativeComponent('n-box-collider', config, testBox).addTo(scene);

```
---
### n-sphere-collider
#### config
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isTrigger: false  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;center: {  'x': 0, 'y': 0, 'x': 0  }  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;radius: 0  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: 'environment'
#### example
```javascript

var geometry = new THREE.SphereGeometry(3, 20, 20);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var testSphere = new THREE.Mesh(geometry, material);
testSphere.position.set(-10, 0, 10);

var config = { radius: 3 };
var testSphereCollider = new NativeComponent('n-sphere-collider', config, testSphere).addTo(scene);
          
```
---
### n-capsule-collider
#### config
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isTrigger: false  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;center: { 'x': 0, 'y': 0, 'x': 0 }  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;radius: 0  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 0  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;direction: 'y'  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: 'environment'
#### example
```javascript

```
---
### n-spawner
#### config
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res: [string]
#### example
```javascript

var testSpawner = new NativeComponent('n-spawner').addTo(scene, function(obj) {
  obj.position.set(5, 0, 0);
});
          
```
---
### n-mesh-collider
#### config
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isTrigger: false  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;convex: true  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: 'environment'
#### example
```javascript

```
---
### n-skeleton-parent
#### config
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;part: 'head'  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;side: 'center'  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index: 0  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;userId: null
#### example
```javascript

var geometry = new THREE.CubeGeometry(0.5, 0.5, 0.5);
var material = new THREE.MeshBasicMaterial({ color: 0xff0000, opacity: 0.7, transparent: true });
var objSkelParent = new THREE.Mesh(geometry, material);
objSkelParent.position.set(0, 0.5, 0);

var config = { part: 'head' };
var testSkeletonParent = new NativeComponent('n-skeleton-parent', config, objSkelParent).addTo(scene);

```
---
### n-cockpit-parent
#### config
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;must pass null
#### example
```javascript

  var geometry = new THREE.PlaneGeometry(0.08, 0.08);
  var material = new THREE.MeshBasicMaterial({ color: 0xff0000, opacity: 0.7, transparent: true });
  var objCockpitParent = new THREE.Mesh(geometry, material);
  objCockpitParent.position.set(0.1, 0, -1);
  
  var testCockpitParent = new NativeComponent('n-cockpit-parent', null, objCockpitParent).addTo(scene);
          
```
---
### n-container
#### config
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;capacity: 4
#### example
```javascript

```
---
### n-text
#### config
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text: ''  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fontSize: 10  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 10  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;horizontalAlign: 'middle'  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;verticalAlign: 'middle'  
#### example
```javascript

var config = { fontSize: 10, horizontalAlign: 'middle' };
var testText = new NativeComponent('n-text', config).addTo(scene);

```
---
### n-billboard
#### config
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;must pass null
#### example
```javascript

var geometry = new THREE.PlaneGeometry(5, 5);
var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
var testPlane = new THREE.Mesh(geometry, material);
testPlane.position.set(-10, 0, 20);

var testBillboard = new NativeComponent('n-billboard', null, testPlane).addTo(scene);

```
---
### n-sound
#### config
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;on: ''  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res: ''  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src: ''  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;loop: false  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;volume: 1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;autoplay: false  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;oneshot: false  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spatialBlend: 1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pitch: 1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;minDistance: 1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxDistance: 12  
#### example
```javascript

var audioFile = 'test.mp3';

var config = {
  autoplay: true,
  loop: false,
  src: 'audio/' + audioFile,
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
