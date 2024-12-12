import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function Avatar({ position = [0, 0, 0] }) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
    mesh.current.position.y = Math.sin(state.clock.getElapsedTime() * 2) * 0.1;
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#4488ff"
        metalness={0.7}
        roughness={0.2}
        envMapIntensity={1}
      />
    </mesh>
  );
}