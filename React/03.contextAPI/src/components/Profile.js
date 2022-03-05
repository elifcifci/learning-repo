import { useState } from 'react'
import { useUser } from '../context/UserContext'

function Profile() {
    const { user, setUser } = useUser();

    const [loading, setLoading] = useState(false)

    const handleLogin = () => {
        setLoading(true)
        setTimeout(() => {
            setUser({ id: 1, userName: "Meslif", bio: "Lorem Lorem Lorem Lorem Lorem" })
            setLoading(false)
        }, 1000)

    };

    const handleLogout = () => {
        setTimeout(() => {
            setUser()
        }, 1000)
    }

    return (
        <div>
            <h3>Profile Component</h3>
            {!user && <button onClick={handleLogin}>Login</button>}

            <br /><br />
            <div>{loading ? "Loading..." : <code>{JSON.stringify(user)}</code>}</div>
            <br />

            {user && <button onClick={handleLogout}>Log out</button>}
        </div>
    )
};

export default Profile;