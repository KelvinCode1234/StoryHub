
// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Three.js 3D Cube
let scene, camera, renderer, cube, raycaster, mouse;

function initThreeJS() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    
    const container = document.getElementById('story-container');
    if (container) {
        container.appendChild(renderer.domElement);
    }

    // Create a more sophisticated cube with gradient material
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshPhongMaterial({ 
        color: 0x00ff00,
        shininess: 100,
        transparent: true,
        opacity: 0.9
    });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0x00ff00, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    camera.position.z = 5;

    // Raycaster for mouse interaction
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    // Add click event listener
    window.addEventListener('click', onMouseClick);
    
    // Add hover effects
    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    animate();
}

function onMouseClick(event) {
    // Calculate mouse position in normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the raycaster with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);
    
    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects([cube]);

    if (intersects.length > 0) {
        // Add click animation
        cube.scale.set(0.9, 0.9, 0.9);
        setTimeout(() => {
            cube.scale.set(1, 1, 1);
            window.location.href = 'story.html';
        }, 150);
    }
}

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects([cube]);

    if (intersects.length > 0) {
        cube.material.emissive.setHex(0x004400);
        document.body.style.cursor = 'pointer';
    } else {
        cube.material.emissive.setHex(0x000000);
        document.body.style.cursor = 'default';
    }
}

function animate() {
    requestAnimationFrame(animate);
    
    // Smooth rotation
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.01;
    
    // Add subtle floating animation
    cube.position.y = Math.sin(Date.now() * 0.001) * 0.2;
    
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
});

// Initialize Three.js when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initThreeJS();
});

// Add interactive button functionality
document.addEventListener('DOMContentLoaded', () => {
    const interactiveButton = document.getElementById('interactive-cube');
    if (interactiveButton) {
        interactiveButton.addEventListener('click', () => {
            const interactiveSection = document.querySelector('.interactive-section');
            if (interactiveSection) {
                interactiveSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});



