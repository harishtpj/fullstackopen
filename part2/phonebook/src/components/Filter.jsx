export default function Filter({ value, onChange }) {
    return (
        <form>
            filter shown with <input value={value} onChange={onChange} />
        </form>
    )
}