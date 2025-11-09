import { HOC } from "@/features"
import { FC } from "react"

const Stars: FC = () => {
  return (
    <div>Stars</div>
  )
}

export const StarsWithHOC = HOC({Component: Stars, idName: 'stars'})