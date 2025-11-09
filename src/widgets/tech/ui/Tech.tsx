import { HOC } from "@/shared";
import { FC } from "react";


const Tech: FC = () => {
  return (
    <div>Tech</div>
  )
}

export const TechWithHOC = HOC({Component: Tech, idName:'tech'})