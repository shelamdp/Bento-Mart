import { Link } from "react-router-dom"

function Login () {
    return (
        <div className="container-md w-75">
            <div className="row pb-3">
                <div className="col-12 col-md-6 my-auto">
                    <div className="card card-rounded">
                        <div className="card-body">
                            <h3 className="text-danger text-center">Welcome</h3>
                            <form action="">
                                <div className="form-group">
                                <label htmlFor="" className="fw-bold">Please input your email address.</label>
                                <input type="text" placeholder="yourname@domain.com" className="form-control" required autoFocus/>
                                </div>  <br />
                                <div className="form-group">
                                <label htmlFor="" className="fw-bold">Please input your password.</label>
                                <input type="password" placeholder="your password" className="form-control" required autoFocus/>
                                </div>  <br />
                                <button className="btn btn-danger w-100 rounded-pill">Sign In</button>
                            </form> <br />
                            <p className="text-center fw-bold">Don't have an account?</p>
                            <p className="text-center fw-bold">Become a BentoMart friend and get a special offer!</p>
                            <Link to="/register" className="text-white text-decoration-none btn btn-danger rounded-pill w-100">Register</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 my-auto">
                    <img src="https://www.hokben.co.id/assets/img/img1.png" alt="" className="mx-auto d-block"/>
                </div>
            </div>
        </div>
    )
}

export default Login