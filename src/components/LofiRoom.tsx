"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera, SoftShadows, Environment } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

function MeshComponent() {
  const fileUrl = '/assets/cozy_room.glb';
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  return (
    <mesh ref={mesh} receiveShadow castShadow>
      <primitive object={gltf.scene} position={[0, -2, 0]} />
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
        orthographic
      >
        {/* Use neutral HDRI without background */}
        <Environment preset="sunset" background={false} />

        {/* Add warm ambient light */}
        <ambientLight intensity={0.2} color="#ffdcb2" />

        {/* Warm soft sunlight from side */}
        <directionalLight
          position={[5, 10, 5]}
          intensity={0.8}
          color="#ffdcb2"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.001}
        />

        {/* Simulate bounce light */}
        <directionalLight
          position={[-3, 5, -5]}
          intensity={0.3}
          color="#ffbfa3"
        />

        <SoftShadows size={12} samples={20} focus={0.8} />

        <MeshComponent />

        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 10}
          maxAzimuthAngle={Math.PI / 2}
        />

        <OrthographicCamera
          makeDefault
          position={[10, 5, 10]}
          zoom={100}
          near={0.1}
          far={1000}
        />
      </Canvas>
    </div>
  );
}
