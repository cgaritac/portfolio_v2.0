import { Loader } from "@/shared";
import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense } from "react";
import { Ball } from "../components";
import { useIntersectionObserver, useIsMobile } from "../hooks";

interface BallCanvasProps {
  icon: string;
  name: string;
}

export const BallCanvas: FC<BallCanvasProps> = ({ icon, name }) => {
  const isMobile = useIsMobile();
  const [containerRef, isVisible] = useIntersectionObserver();

  return (
    <div ref={containerRef} className="w-full h-full">
      {isVisible && (
        <Canvas
          frameloop={isMobile ? "demand" : "always"}
          gl={{ preserveDrawingBuffer: true }}
          className="cursor-pointer w-full h-full"
          title={name}
          dpr={isMobile ? [1, 1.5] : [1, 2]}
        >
          <Suspense fallback={<Loader />}>
            <OrbitControls 
              enableZoom={false} 
            />
            <Ball imgUrl={icon} />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  )
}