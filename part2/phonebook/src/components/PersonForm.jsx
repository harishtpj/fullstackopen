import { useState } from 'react'

export default function PersonForm({ addPerson }) {
    const [newName, setNewName] = useState('')
    const [newNum, setNewNum] = useState('')

    const handleNameChange = (e) => {
        setNewName(e.target.value)
    }

    const handleNumChange = (e) => {
        setNewNum(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (addPerson(newName, newNum)) {
            setNewName('')
            setNewNum('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                number: <input value={newNum} onChange={handleNumChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}