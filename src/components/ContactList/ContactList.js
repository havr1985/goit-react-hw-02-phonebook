import { ContactListItem } from "components/ContactListItem/ContactListItem";

export const ContactList = (({ items, onDelete }) => {
    return (
        <ul>
            {items.map(item => {
                return (
                    <ContactListItem
                        key={item.id}
                        contact={item}
                     onDelete={onDelete}/>
                   
                )
            })}
        </ul>
    )
})