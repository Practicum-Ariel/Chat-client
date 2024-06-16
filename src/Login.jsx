

export default function Login({ setIsConnected }) {
   
    return (
        <div>
            Welcome to Ariel-Chat
            <div><input type='text' /></div>
            <div>
                <button onClick={() => setIsConnected(true)}>Join</button>
                </div>
        </div>
    )
}
