import { Loader } from "@/shared";
import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense } from "react";
import { Ball } from "../components";

interface BallCanvasProps {
  icon: string;
  name: string;
}

export const BallCanvas: FC<BallCanvasProps> = ({ icon, name }) => {
  return (
    <Canvas
      frameloop="always"
      gl={{ preserveDrawingBuffer: true }}
      className="cursor-pointer"
      title={name}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls 
          enableZoom={false} 
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}