import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const COUNT = 30000;

export const CURVES = [
  { id: 'spiral', name: 'Archimedean Spiral' },
  { id: 'cardioid', name: 'Cardioid' },
  { id: 'butterfly', name: 'Butterfly Curve' },
  { id: 'catenary', name: 'Catenary (Catenoid)' },
  { id: 'lemniscate', name: 'Bernoulli’s Lemniscate' },
  { id: 'rose', name: 'Rose Curve' },
];

// Create a soft glowing particle texture programmatically
const createParticleTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)');
    gradient.addColorStop(0.5, 'rgba(255,255,255,0.2)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);
  }
  return new THREE.CanvasTexture(canvas);
};

export default function CosmicVortex({ currentCurveIndex }: { currentCurveIndex: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const texture = useMemo(() => createParticleTexture(), []);

  // Initialize positions, colors, and target positions
  const { positions, colors, targets } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const targets = new Float32Array(COUNT * 3);
    const color = new THREE.Color();

    for (let i = 0; i < COUNT; i++) {
      // Start with a random spherical distribution
      const r = 200 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      // Cosmic color palette: cyan, deep blue, purple, magenta
      const hue = 0.5 + Math.random() * 0.4; // 0.5 (cyan) to 0.9 (magenta)
      const saturation = 0.8 + Math.random() * 0.2;
      const lightness = 0.4 + Math.random() * 0.4;
      color.setHSL(hue, saturation, lightness);
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return { positions, colors, targets };
  }, []);

  // Update target positions whenever the curve changes
  useEffect(() => {
    const type = CURVES[currentCurveIndex].id;
    
    for (let i = 0; i < COUNT; i++) {
      // Parameter t goes from 0 to 100 * PI (50 full rotations)
      const t = (i / COUNT) * Math.PI * 100;
      const i3 = i * 3;

      let x = 0, y = 0, z = 0;

      // Add volumetric noise to give it a 3D "vortex" feel
      const noiseX = (Math.random() - 0.5) * 6;
      const noiseY = (Math.random() - 0.5) * 6;
      const noiseZ = (Math.random() - 0.5) * 6;

      switch (type) {
        case 'spiral': {
          const a = 0.5;
          x = a * t * Math.cos(t);
          y = a * t * Math.sin(t);
          z = (i / COUNT) * 300 - 150; // Stretch along Z-axis
          break;
        }
        case 'cardioid': {
          const a = 50;
          const r = a * (1 - Math.cos(t));
          x = r * Math.cos(t);
          y = r * Math.sin(t);
          z = (Math.random() - 0.5) * 100;
          break;
        }
        case 'butterfly': {
          const a = 18;
          const r = Math.exp(Math.sin(t)) - 2 * Math.cos(4 * t) + Math.pow(Math.sin((2 * t - Math.PI) / 24), 5);
          x = a * r * Math.cos(t);
          y = a * r * Math.sin(t);
          z = (Math.random() - 0.5) * 100;
          break;
        }
        case 'catenary': {
          // 3D Catenoid (surface of revolution of a catenary)
          const a = 30;
          z = (i / COUNT) * 120 - 60; // Z from -60 to 60
          const r = a * Math.cosh(z / a);
          x = r * Math.cos(t);
          y = r * Math.sin(t);
          break;
        }
        case 'lemniscate': {
          const a = 120;
          const denom = 1 + Math.sin(t) * Math.sin(t);
          x = (a * Math.cos(t)) / denom;
          y = (a * Math.sin(t) * Math.cos(t)) / denom;
          z = (Math.random() - 0.5) * 80;
          break;
        }
        case 'rose': {
          const a = 100;
          const k = 5; // 5 petals
          const r = a * Math.cos(k * t);
          x = r * Math.cos(t);
          y = r * Math.sin(t);
          z = (Math.random() - 0.5) * 80;
          break;
        }
      }

      targets[i3] = x + noiseX;
      targets[i3 + 1] = y + noiseY;
      targets[i3 + 2] = z + noiseZ;
    }
  }, [currentCurveIndex, targets]);

  // Animate particles towards their targets and add turbulence
  useFrame((state) => {
    if (!pointsRef.current) return;
    const geo = pointsRef.current.geometry;
    const pos = geo.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;
      
      // Smooth interpolation towards the target position
      pos[i3] += (targets[i3] - pos[i3]) * 0.015;
      pos[i3 + 1] += (targets[i3 + 1] - pos[i3 + 1]) * 0.015;
      pos[i3 + 2] += (targets[i3 + 2] - pos[i3 + 2]) * 0.015;

      // Add continuous turbulence/wobble
      pos[i3] += Math.sin(time * 1.2 + i * 0.1) * 0.04;
      pos[i3 + 1] += Math.cos(time * 1.3 + i * 0.1) * 0.04;
      pos[i3 + 2] += Math.sin(time * 1.1 + i * 0.1) * 0.04;
    }
    
    geo.attributes.position.needsUpdate = true;

    // Slowly rotate the entire vortex to enhance the 3D effect
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.z = time * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={COUNT} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={COUNT} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={1.5}
        map={texture}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
