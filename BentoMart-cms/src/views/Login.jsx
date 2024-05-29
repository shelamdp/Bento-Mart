import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const baseUrl = "https://bentomart.shelamdp.xyz"
    // const baseUrl = "http://localhost:3000"

    useEffect(() => {
        if (localStorage.access_token) {
            navigate("/");
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(baseUrl + "/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            })
            if (res.ok) {
                const data = await res.json()
                localStorage.access_token = data.access_token
                Swal.fire(
                    'Success login!',
                    "Succes!",
                    'success'
                )
                navigate("/")

            } else {
                const error = await res.json()
                Swal.fire(
                    'Ups!',
                    error.message,
                    'error'
                )
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <section id="login">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1 className="display-4 mb-5 mt-5">Login Page</h1>
                    <hr />
                    <br />
                    <div className="form-outline mb-4">
                        <label className="form-label">Email address</label>
                        <input type="text" className="form-control" placeholder="enter your email address . . . " value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="enter your password . . ." value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-warning btn-block mb-4">
                        Sign in
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Login