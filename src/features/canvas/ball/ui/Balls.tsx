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
    <div className="w-full h-full">
      <Canvas
        frameloop={"always"}
        gl={{ preserveDrawingBuffer: true }}
        className="cursor-pointer w-full h-full"
        title={name}
        dpr={[1, 2]}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls 
            enableZoom={false} 
          />
          <Ball imgUrl={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}