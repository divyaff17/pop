import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, TorusKnot, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

export function FashionScene() {
  const torusRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (torusRef.current) {
      torusRef.current.rotation.x = Math.sin(t / 4) / 8;
      torusRef.current.rotation.y = Math.cos(t / 2) / 8;
      torusRef.current.rotation.z = t / 4;
    }

    if (sphereRef.current) {
      sphereRef.current.rotation.y = t / 3;
    }

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t / 8) / 4;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main floating torus knot */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <TorusKnot ref={torusRef} args={[1.2, 0.4, 128, 32]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#ff0080"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </TorusKnot>
      </Float>

      {/* Secondary sphere */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
        <Sphere ref={sphereRef} args={[0.6, 64, 64]} position={[2.5, 1, -1]}>
          <meshStandardMaterial
            color="#9333ea"
            roughness={0.1}
            metalness={0.9}
            emissive="#9333ea"
            emissiveIntensity={0.3}
          />
        </Sphere>
      </Float>

      {/* Small accent sphere */}
      <Float speed={3} rotationIntensity={0.8} floatIntensity={1.2}>
        <Sphere args={[0.3, 32, 32]} position={[-2, -0.5, 0.5]}>
          <meshStandardMaterial
            color="#06b6d4"
            roughness={0}
            metalness={1}
            emissive="#06b6d4"
            emissiveIntensity={0.5}
          />
        </Sphere>
      </Float>

      {/* Sparkles effect */}
      <Sparkles
        count={100}
        scale={8}
        size={3}
        speed={0.4}
        opacity={0.6}
        color="#ff0080"
      />

      <Sparkles
        count={50}
        scale={6}
        size={2}
        speed={0.3}
        opacity={0.4}
        color="#9333ea"
      />

      {/* Ambient and directional lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#9333ea" />
      <pointLight position={[0, 0, 5]} intensity={1} color="#ff0080" />
    </group>
  );
}
