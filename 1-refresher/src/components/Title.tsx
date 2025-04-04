type Props = {
    title: string
}

function Title({ title }: Props) {
    return (
        <h1>{title}</h1>
    )
}

export default Title;