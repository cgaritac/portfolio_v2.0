import { FC } from "react";
import { useGLTF } from "@react-three/drei";

export const Earth: FC = () => {
    const earth = useGLTF('/planet/scene.gltf');
  
    return (
      <primitive 
        object={earth.scene} 
        scale={2.5} 
        position-y={0} 
        rotation-y={0}   
      />
    )
  }