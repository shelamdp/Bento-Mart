import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

function Register() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const baseUrl = "https://bentomart.shelamdp.xyz"
    // const baseUrl = "http://localhost:3000"

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(baseUrl + "/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.access_token
                },
                body: JSON.stringify({ name, email, password, phoneNumber, address }),
            })
            if (res.ok) {
                Swal.fire(
                    'Success!',
                    "Succes register new admin!",
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
        <section id="register">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1 className="display-4 mb-5">Register Page</h1>
                    <hr />
                    <div className="form-outline mb-4 mt-5">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="enter your name . . . "
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="enter your email address . . . "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="enter your password . . ."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label">Phone Number</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="enter your phone number(optional)"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="enter your address(optional)"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-warning btn-block mb-4">
                        Sign up
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Register
