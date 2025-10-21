'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export function DTFModel() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      {/* Folha DTF translúcida */}
      <planeGeometry args={[3, 2]} />
      <meshStandardMaterial
        color="#ffd700"
        transparent
        opacity={0.8}
        metalness={0.8}
        roughness={0.2}
        emissive="#ffd700"
        emissiveIntensity={0.1}
      />
      
      {/* Texto/Design na folha */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[2.5, 1.5]} />
        <meshStandardMaterial
          color="#000000"
          transparent
          opacity={0.9}
        />
      </mesh>
    </mesh>
  );
}

