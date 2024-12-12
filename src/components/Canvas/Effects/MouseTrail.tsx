import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function MouseTrail() {
  const { viewport, camera } = useThree();
  const points = useRef<THREE.Points>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const trail = useRef<{ x: number; y: number; z: number }[]>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mousePosition.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      };
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  useFrame(() => {
    if (!points.current) return;

    const vector = new THREE.Vector3(
      mousePosition.current.x * viewport.width / 2,
      mousePosition.current.y * viewport.height / 2,
      0
    );
    vector.unproject(camera);

    trail.current.push({
      x: vector.x,
      y: vector.y,
      z: vector.z
    });

    if (trail.current.length > 50) {
      trail.current.shift();
    }

    const positions = new Float32Array(trail.current.length * 3);
    trail.current.forEach((point, i) => {
      positions[i * 3] = point.x;
      positions[i * 3 + 1] = point.y;
      positions[i * 3 + 2] = point.z;
    });

    points.current.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry />
      <pointsMaterial
        size={0.05}
        color="#4488ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}