
type Props = {
    title: string
    description: string
    remove: () => void
}

export default function ListItem({ title, description, remove }: Props) {
    return (
        <div className="my-list-item">
            <span className="title">{title}</span>
            <span className="subtitle">{description}</span>
            <button className="text-red-400" onClick={remove}>Remover</button>
        </div>
    )
}
