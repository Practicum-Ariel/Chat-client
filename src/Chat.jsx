import { useEffect, useState } from "react"
import { io } from 'socket.io-client'


export default function Chat({ myName = "Lombo" }) {
    const [socketIO, setSocketIO] = useState(io())
    const [msgs, setMsgs] = useState([])//['hello, good morning', 'how are u?', "good, and you?"])
    const [rooms, setRooms] = useState(['room1', 'room2', 'room3'])

    const [room, setRoom] = useState(rooms[0])
    const [inp, setInp] = useState('')
    useEffect(() => {
        const socket = io('http://localhost:2500')
        
        socket.on('welcome', (data) => {
            console.log('welcome to chat, your id:', data);
        })
        socket.on('msg-server', (msg) => {
            setMsgs(prev => [...prev, msg])
        })

        setSocketIO(socket)
    }, [])

    const handleRoom = (r) => {
        if (room!=r) {
            setRoom(r)
            setMsgs([])
        }
    }

    const handleSend = () => {
        if (inp) socket.emit('new-msg-client', inp)
        setInp('')
    }
    return (
        <div>
            {myName}, welcome!

            <div>
                <div>
                    <h2>Rooms</h2>
                    {rooms.map(r => <div key={r} onClick={()=>handleRoom(r)}>{r}</div>)}

                </div>
                <div>
                    <h2>room : {room}</h2>
                    {msgs.map(m => <li key={m}>{m}</li>)}
                </div>
            </div>
            <div>
                <input type="text" onInput={(e) => setInp(e.target.value)} />
                <button onClick={handleSend}>send</button>
            </div>
        </div>
    )
}
