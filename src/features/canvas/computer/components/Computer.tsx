import { useGLTF } from "@react-three/drei";
import { FC } from "react";

export const Computer: FC = () => {
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
        scale={0.75} 
        position={[0, -3.25, -1.5]} 
        rotation={[-0.01, -0.2, -0.1]} 
      />
    </mesh>
  )
}