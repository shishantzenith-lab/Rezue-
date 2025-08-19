const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, 400);
document.getElementById('three-container').appendChild(renderer.domElement);
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0xff4081 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5,5,5);
scene.add(light);
camera.position.z = 5;
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / 400;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, 400);
});
