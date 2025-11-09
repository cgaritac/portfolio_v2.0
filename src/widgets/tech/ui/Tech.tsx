import { FC } from "react";
import { BallCanvas, HOC } from "@/features";
import { TECHNOLOGIES } from "../content";

const Tech: FC = () => {
  return (
    <div>
      <div className="w-full flex flex-row flex-wrap justify-center items-center gap-10">
        {TECHNOLOGIES.map((technology) => (
          <div className="w-27 h-27" key={technology.name}>
            <BallCanvas icon={technology.icon} name={technology.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export const TechWithHOC = HOC({Component: Tech, idName:'tech'})