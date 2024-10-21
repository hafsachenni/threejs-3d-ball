import * as THREE from 'three';

//scene creation
const scene = new THREE.Scene();

//sphere creation
const geometry = new THREE.SphereGeometry( 3, 64, 64);
const material = new THREE.MeshStandardMaterial( { color: '#00ff83'} ); 
const mesh = new THREE.Mesh( geometry, material ); scene.add( mesh );

//camere creation 45 is how much the much can see
const camera = new THREE.PerspectiveCamera(45, 800, 600);
scene.add(camera);

//renderer to render the scene on the screen
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({canvas});

renderer.setSize(800, 600);
renderer.render(scene, camera);
