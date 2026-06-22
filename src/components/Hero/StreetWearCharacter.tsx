'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const StreetWearCharacter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const characterRef = useRef<THREE.Group | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 3);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowShadowMap;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Neon lights
    const redLight = new THREE.PointLight(0xFF3B30, 2, 20);
    redLight.position.set(5, 2, 0);
    scene.add(redLight);

    const blueLight = new THREE.PointLight(0x00a8ff, 1.5, 20);
    blueLight.position.set(-5, 2, 0);
    scene.add(blueLight);

    // Create streetwear character
    const character = new THREE.Group();
    characterRef.current = character;

    // Head
    const headGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const headMaterial = new THREE.MeshStandardMaterial({ color: 0xd4a574 });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.6;
    head.castShadow = true;
    head.receiveShadow = true;
    character.add(head);

    // Eyes
    const eyeGeometry = new THREE.SphereGeometry(0.08, 16, 16);
    const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.1, 1.7, 0.25);
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.1, 1.7, 0.25);
    character.add(leftEye, rightEye);

    // Oversized Hoodie
    const hoodieBodyGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.5);
    const hoodieMaterial = new THREE.MeshStandardMaterial({
      color: 0x1A1A1A,
      roughness: 0.8,
      metalness: 0.1,
    });
    const hoodieBody = new THREE.Mesh(hoodieBodyGeometry, hoodieMaterial);
    hoodieBody.position.y = 0.9;
    hoodieBody.castShadow = true;
    hoodieBody.receiveShadow = true;
    character.add(hoodieBody);

    // Hood
    const hoodGeometry = new THREE.ConeGeometry(0.35, 0.4, 32);
    const hood = new THREE.Mesh(hoodGeometry, hoodieMaterial);
    hood.position.set(0, 1.8, 0.1);
    hood.castShadow = true;
    character.add(hood);

    // Sleeves
    const sleeveGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.8, 16);
    const leftSleeve = new THREE.Mesh(sleeveGeometry, hoodieMaterial);
    leftSleeve.position.set(-0.6, 1, 0);
    leftSleeve.castShadow = true;
    character.add(leftSleeve);

    const rightSleeve = new THREE.Mesh(sleeveGeometry, hoodieMaterial);
    rightSleeve.position.set(0.6, 1, 0);
    rightSleeve.castShadow = true;
    character.add(rightSleeve);

    // Cargo Pants
    const pantsGeometry = new THREE.BoxGeometry(0.6, 0.7, 0.4);
    const pantsMaterial = new THREE.MeshStandardMaterial({
      color: 0x2A2A2A,
      roughness: 0.7,
    });
    const pants = new THREE.Mesh(pantsGeometry, pantsMaterial);
    pants.position.y = 0.15;
    pants.castShadow = true;
    pants.receiveShadow = true;
    character.add(pants);

    // Cargo pockets
    const pocketGeometry = new THREE.BoxGeometry(0.15, 0.2, 0.05);
    const pocketMaterial = new THREE.MeshStandardMaterial({ color: 0x1A1A1A });
    for (let i = 0; i < 4; i++) {
      const pocket = new THREE.Mesh(pocketGeometry, pocketMaterial);
      pocket.position.set(
        i % 2 === 0 ? -0.2 : 0.2,
        0.3 - (i < 2 ? 0 : 0.3),
        0.18
      );
      character.add(pocket);
    }

    // Sneakers
    const sneakerGeometry = new THREE.BoxGeometry(0.4, 0.3, 0.6);
    const sneakerMaterial = new THREE.MeshStandardMaterial({
      color: 0xFF3B30,
      metalness: 0.2,
    });
    const leftSneaker = new THREE.Mesh(sneakerGeometry, sneakerMaterial);
    leftSneaker.position.set(-0.2, -0.5, 0.1);
    leftSneaker.castShadow = true;
    character.add(leftSneaker);

    const rightSneaker = new THREE.Mesh(sneakerGeometry, sneakerMaterial);
    rightSneaker.position.set(0.2, -0.5, 0.1);
    rightSneaker.castShadow = true;
    character.add(rightSneaker);

    // Arms
    const armGeometry = new THREE.CylinderGeometry(0.12, 0.1, 0.6, 16);
    const skinMaterial = new THREE.MeshStandardMaterial({ color: 0xd4a574 });
    const leftArm = new THREE.Mesh(armGeometry, skinMaterial);
    leftArm.position.set(-0.55, 1, 0);
    leftArm.castShadow = true;
    character.add(leftArm);

    const rightArm = new THREE.Mesh(armGeometry, skinMaterial);
    rightArm.position.set(0.55, 1, 0);
    rightArm.castShadow = true;
    character.add(rightArm);

    // Add character to scene
    scene.add(character);

    // Ground
    const groundGeometry = new THREE.PlaneGeometry(20, 20);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x0a0a0a,
      roughness: 0.8,
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Particles for atmosphere
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = Math.random() * 10;
      positions[i + 2] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xFF3B30,
      size: 0.1,
      opacity: 0.6,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Animation
    let animationFrameId: number;
    let time = 0;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (character) {
        time += 0.01;

        // Character animations
        character.position.x = Math.sin(time * 0.3) * 0.2; // Subtle sway
        character.rotation.y = Math.sin(time * 0.2) * 0.1; // Rotate slightly

        // Head tilt
        head.rotation.z = Math.cos(time * 0.2) * 0.05;

        // Breathing motion
        hoodieBody.scale.y = 1 + Math.sin(time * 0.8) * 0.02;

        // Arm movement
        if (leftArm) {
          leftArm.rotation.z = Math.sin(time * 0.5) * 0.3;
        }
        if (rightArm) {
          rightArm.rotation.z = Math.sin(time * 0.5 + Math.PI) * 0.3;
        }
      }

      // Particle animation
      if (particles) {
        particles.rotation.y += 0.001;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    setIsLoaded(true);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen relative"
      style={{ background: 'linear-gradient(135deg, #000000 0%, #1A1A1A 100%)' }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-brand-red border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-brand-offWhite">Loading...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StreetWearCharacter;
