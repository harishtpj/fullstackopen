export default function Persons({ persons }) {
    return (
        <div>
            {persons.map(person => <li key={person.id}>{person.name} - {person.number}</li>)}
        </div>
    )
}