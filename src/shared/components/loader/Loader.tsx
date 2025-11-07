import { FC } from "react";
import { Html, useProgress } from "@react-three/drei";

export const Loader: FC = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-loader"></span>
      <p className="canvas-loader-text">{progress.toFixed(2)}%</p>
    </Html>
  )
}