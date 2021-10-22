const Person = ({name, age, hobbies}) => {
    return (
        <div>
            <p>Learn some information about this person</p>
            <h3>{age > 18 ? "Please go vote!" : "You must be 18"}</h3>
            <p>{name.length > 8 ? name.substring(0, 7) : name}</p>
            <ul>{hobbies.map(h => <li>{h}</li>)}</ul>
        </div>
    )
}