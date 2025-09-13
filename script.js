
// 3D Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
document.getElementById('story-container').appendChild(renderer.domElement);

// Create multiple floating geometric shapes
const shapes = [];
const geometries = [
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    new THREE.SphereGeometry(0.3, 16, 16),
    new THREE.OctahedronGeometry(0.4),
    new THREE.TetrahedronGeometry(0.4)
];

const colors = [0x2563eb, 0x10b981, 0x8b5cf6, 0xf59e0b];

for (let i = 0; i < 15; i++) {
    const geometry = geometries[Math.floor(Math.random() * geometries.length)];
    const material = new THREE.MeshBasicMaterial({ 
        color: colors[Math.floor(Math.random() * colors.length)],
        transparent: true,
        opacity: 0.7
    });
    const shape = new THREE.Mesh(geometry, material);
    
    shape.position.x = (Math.random() - 0.5) * 20;
    shape.position.y = (Math.random() - 0.5) * 20;
    shape.position.z = (Math.random() - 0.5) * 20;
    
    shape.userData = {
        rotationSpeed: {
            x: (Math.random() - 0.5) * 0.02,
            y: (Math.random() - 0.5) * 0.02,
            z: (Math.random() - 0.5) * 0.02
        },
        floatSpeed: Math.random() * 0.01 + 0.005
    };
    
    shapes.push(shape);
    scene.add(shape);
}

camera.position.z = 8;

// Function to navigate to stories
function enterStories() {
    // Add smooth transition effect
    document.body.style.transition = 'opacity 0.5s ease-out';
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        window.location.href = 'story.html';
    }, 500);
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    shapes.forEach((shape, index) => {
        // Rotate shapes
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;
        
        // Float movement
        shape.position.y += Math.sin(Date.now() * shape.userData.floatSpeed + index) * 0.01;
    });
    
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();



