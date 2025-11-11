import { FC, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Loader } from "@/shared";

const Earth = () => {
  const earth = useGLTF('/planet/scene.gltf');
  return (
    <primitive object={earth.scene} scale={0.25} position-y={0} rotation-y={0} />
  )
}

export const EarthCanvas: FC = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}