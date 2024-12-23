import React from 'react'
import { useNavigate } from 'react-router-dom'

function Apps() {
    const navigate = useNavigate();
    const Redirect = () => {
        navigate("/")
    }

return (
    <>
    <div>
        This is the app tab.
    </div>
    <br/>
    <button onClick={Redirect}>Go to main page</button>
    </>
)
}

export default Apps
