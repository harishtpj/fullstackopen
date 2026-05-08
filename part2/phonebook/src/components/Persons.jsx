export default function Persons({ persons, onDelete }) {
    return (
        <div>
            {persons.map(person => (
                <li key={person.id}>
                    {person.name} - {person.number}
                    <button onClick={() => onDelete(person.name, person.id)}>delete</button>
                </li>
            ))}
        </div>
    )
}