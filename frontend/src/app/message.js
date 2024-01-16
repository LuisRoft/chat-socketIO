export default function Message({ message }) {
    console.log(message)
    if (message.type === 'join') return <p>{`${message.sid} joined the chat`}</p>
    if (message.type == 'leave') return <p>{`${message.sid} leave the chat`}</p>
    if (message.type === 'chat') return <p>{`${message.sid}: ${message.message}`}</p>
}