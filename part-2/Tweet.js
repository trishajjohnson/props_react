const Tweet = ({username, name, datePosted, message}) => {
    return (
        <div>
            <h2>{name}</h2>
            <h3>{username}</h3>
            <h4>{datePosted}</h4>
            <p>{message}</p>
        </div>
    )
}