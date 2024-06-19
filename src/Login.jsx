import axios from "axios"


export default function Login({ setIsConnected, userName, setUserName }) {


    const handleLogin = () => {
        // api for check exist name
        axios.post('http://localhost:2500/login', { userName: userName })
            .then(r => !r.data && setIsConnected(true))
    }
    return (
        <div>
            Welcome to Ariel-Chat
            <div><input type='text'
                placeholder="enter your name"
                onInput={(e) => setUserName(e.target.value)} /></div>
            <div>
                <button onClick={handleLogin}>Join</button>
            </div>
        </div>
    )
}
