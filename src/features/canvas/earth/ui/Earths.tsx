import { FC, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { Loader } from "@/shared";
import { Earth } from "../components";

export const EarthCanvas: FC = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls 
          autoRotate={true}
          autoRotateSpeed={1}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2} />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}