
export const ContactListItem = ({ contact: { name, number, id }, onDelete }) => {
    return (
        <li>
            <span>{name}:</span>
            <span>{number}</span>
            <button type="button" onClick={() => onDelete(id)}>Delete</button>
        </li>
    )
}