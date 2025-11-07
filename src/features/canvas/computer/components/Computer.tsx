import { useGLTF } from "@react-three/drei";
import { FC } from "react";

interface ComputerProps {
  isMobile: boolean;
  isTablet: boolean;
}

export const Computer: FC<ComputerProps> = ({ isMobile, isTablet }) => {
  const computer = useGLTF('/desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight 
        intensity={2.0} 
        groundColor="lightgray" />
      <pointLight 
        intensity={1} />
      <spotLight 
        position={[-20, 50, 10]} 
        angle={0.12} 
        penumbra={1} 
        intensity={1} 
        castShadow
        shadow-mapSize={1024} />
      <primitive 
        object={computer.scene} 
        scale={isMobile ? 0.27 : isTablet ? 0.5 : 0.75} 
        position={isMobile ? [0, -0.07, -0.45] : isTablet ? [0, -1.5, -0.9] : [0, -3.25, -1.5]} 
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}