import { PointMaterial, Points } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";
import { FC, useMemo, useRef } from "react";
import type { Points as ThreePoints } from "three";

export const Stars: FC = (props) => {
  const ref = useRef<ThreePoints | null>(null);

  const positions = useMemo(
    () => random.inSphere(new Float32Array(15000), { radius: 1.2 }),
    []
  );

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={positions}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};
