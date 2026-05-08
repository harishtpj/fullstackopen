export default function Flash({ msg, type }) {
    if (msg === null) 
        return null

    return (
        <div className={type}>
            {msg}
        </div>
    )
}