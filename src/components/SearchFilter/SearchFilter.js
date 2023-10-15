
export const SearchFilter = ({ filter:{filter}, onChangeFilter }) => {
    return (
        <input type="text"
            value={filter}
            onChange={evt => onChangeFilter(filter = evt.target.value)}
            placeholder="Search by name"/>
    )

}