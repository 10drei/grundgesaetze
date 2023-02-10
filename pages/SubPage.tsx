import { Right } from "@prisma/client"
import { useRouter } from "next/router"

interface Props {
  right: Right
}

const SubPage = ({ right }: Props) => {
  return (
    <div>
      <h1>{right.text}</h1>
    </div>
  )
}

export default SubPage
