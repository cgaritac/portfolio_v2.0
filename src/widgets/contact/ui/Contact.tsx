import { HOC } from "@/features"
import { FC } from "react"

const Contact: FC = () => {
  return (
    <div>Contact</div>
  )
}

export const ContactWithHOC = HOC({Component: Contact, idName: 'contact'})