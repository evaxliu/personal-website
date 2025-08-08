"use client";

import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera, SoftShadows, Environment } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { Mesh } from "three";

function MeshComponent() {
  const fileUrl = '/assets/cozy_room.glb';
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  return (
    <mesh ref={mesh} receiveShadow castShadow>
      <primitive object={gltf.scene} position={[0, -1, 0]} />
    </mesh>
  );
}

export function LofiRoom() {
  return (
    <div className="lofi-container">
      <Canvas
        shadows
        orthographic
        style={{ width: '100%', height: '100%' }}
      >
        <Environment preset="sunset" background={false} />
        <ambientLight intensity={0.2} color="#ffdcb2" />
        <directionalLight
          position={[5, 10, 5]}
          intensity={0.8}
          color="#ffdcb2"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.001}
        />
        <directionalLight position={[-3, 5, -5]} intensity={0.3} color="#ffbfa3" />
        <SoftShadows size={12} samples={20} focus={0.8} />
        <MeshComponent />
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 10}
          maxAzimuthAngle={Math.PI / 2}
        />
        <OrthographicCamera makeDefault position={[12, 5, 12]} zoom={90} near={0.1} far={1000} />
      </Canvas>
    </div>
  );
}
