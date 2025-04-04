import { ReactNode } from "react"

interface Props {
    Desc: ReactNode
}

export const Description = ({ Desc }: Props) => {
    return (
        <p> {Desc}</p>
    )
}
