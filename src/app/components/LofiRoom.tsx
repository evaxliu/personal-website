"use client";

import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  OrthographicCamera,
  useGLTF,
  useProgress,
} from "@react-three/drei";
import * as THREE from "three";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(0)}% loaded</Html>;
}

function RoomModel({ url }: { url: string }) {
  const gltf = useGLTF(url);

  useMemo(() => {
    gltf.scene.traverse((obj: THREE.Object3D) => {
      if (obj instanceof THREE.Mesh || obj instanceof THREE.SkinnedMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  }, [gltf.scene]);

  return <primitive object={gltf.scene} position={[0, -1, 0]} />;
}

export default function LofiRoom() {
  const modelUrl = "/assets/cozy.glb";

  return (
    <div className="w-full h-full">
      <Canvas className="w-full h-full block" shadows>
        <Suspense fallback={<Loader />}>
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

          <RoomModel url={modelUrl} />

          <OrbitControls
            target={[0, 0, 0]}
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

useGLTF.preload("/assets/cozy.glb");
