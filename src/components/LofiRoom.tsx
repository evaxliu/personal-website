"use client";

import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  OrthographicCamera,
  SoftShadows,
  useProgress,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { Mesh } from "three";
import roomUrl from "../assets/cozy.glb";
import "../styles/LofiRoom.css";

function Loader() {
  const { progress } = useProgress()
  console.log(progress)
  return <Html center>{progress} % loaded</Html>
}

function MeshComponent() {
  const fileUrl = roomUrl;
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  gltf.scene.traverse((child: any) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} position={[0, -1, 0]} />
    </mesh>
  );
}

export function LofiRoom() {
  return (
    <div id="lofi-container">
      <Canvas shadows style={{ width: "100%", height: "100%" }}>
        <Suspense fallback={<Loader/>}>
          <directionalLight
            position={[8, 12, -6]}
            intensity={1.3}
            color="#ffd8a6"
            castShadow
            shadow-mapSize-width={4096}
            shadow-mapSize-height={4096}
            shadow-bias={-0.0001}
          />

          <hemisphereLight args={["#ffeedd", "#999999", 0.6]} />

          <directionalLight
            position={[-6, 4, -2]}
            intensity={0.6}
            color="#ff9bb2"
          />
          
          <directionalLight
            position={[0, 3, -8]}
            intensity={0.3}
            color="#a5c8ff"
          />

          <ambientLight intensity={0.35} color="#fff3e0" />

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
            position={[12, 5, 12]}
            zoom={90}
            near={0.1}
            far={1000}
          />
      </Suspense>
      </Canvas>
    </div>
  );
}
