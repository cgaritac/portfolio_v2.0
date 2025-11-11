import { Loader } from "@/shared"
import { Preload } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { FC, Suspense } from "react"
import { Stars } from "../components"

export const StarsCanvas: FC = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }} >
        <Suspense fallback={<Loader />}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}