import { Decal, Float, useTexture } from "@react-three/drei";
import { FC, useState } from "react";

interface BallProps {
  imgUrl: string;
}

export const Ball: FC<BallProps> = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Float speed={2.75} rotationIntensity={1} floatIntensity={2} >
      <ambientLight intensity={0.25} />
      <directionalLight 
        position={[0, 0, 0.05]} 
        intensity={isHovered ? 1.5 : 1}
        castShadow
      />
      <mesh 
        castShadow 
        receiveShadow 
        scale={2.85}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial 
          color="#fff" 
          polygonOffset 
          polygonOffsetFactor={-5} 
          flatShading
          roughness={isHovered ? 0.3 : 0.5}
          metalness={isHovered ? 0.1 : 0.5}
        />
        <Decal 
          position={[0, 0, 1]} 
          rotation={[2 * Math.PI, 0, 6.25]} 
          scale={1}
          map={decal} />
      </mesh>
    </Float>
  )
}