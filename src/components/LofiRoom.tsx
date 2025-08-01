"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function MeshComponent() {
  const fileUrl = '/assets/lofi_room.glb';
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  return (
    <mesh ref={mesh} receiveShadow>
      <primitive object={gltf.scene} position={[0, -3, 0]} />
    </mesh>
  );
}

export function LofiRoom() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Canvas
        shadows
        style={{ width: '85vw', height: '85vh' }}
        camera={{ position: [10, 5, 10] }}
      >
        <ambientLight intensity={1.5} color="#ffffff" />

        <directionalLight
          castShadow
          position={[5, 10, 5]}
          intensity={0.5}
          color="#ffffff"
        />
        <pointLight position={[10, 10, 10]} intensity={0.5} castShadow />
        <MeshComponent />
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 10}
          maxAzimuthAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}