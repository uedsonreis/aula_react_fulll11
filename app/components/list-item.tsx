
type Props = {
    title: string
    description: string
    update: () => void
    remove: () => void
}

export default function ListItem({ title, description, update, remove }: Props) {
    return (
        <div className="my-list-item">
            <span className="title">{title}</span>
            <span className="subtitle">{description}</span>
            
            <div>
                <button className="text-red-400" onClick={remove}>Remover</button>
                <button className="text-blue-400" onClick={update}>Atualizar</button>
            </div>
        </div>
    )
}
