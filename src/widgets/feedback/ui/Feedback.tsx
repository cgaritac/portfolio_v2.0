import { HOC } from "@/features"
import { FC } from "react"

const Feedback: FC = () => {
  return (
    <div>Feedback</div>
  )
}

export const FeedbackWithHOC = HOC({Component: Feedback, idName: 'feedback'})