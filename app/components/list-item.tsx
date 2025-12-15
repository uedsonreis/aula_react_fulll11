
type Props = {
    title: string
    description: string
}

export default function ListItem({ title, description }: Props) {
    return (
        <div className="my-list-item">
            <span className="title">{title}</span>
            <span className="subtitle">{description}</span>
        </div>
    )
}
