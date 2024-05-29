function Register() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-4 mx-auto my-auto">
                    <div className="card card-rounded">
                        <div className="card-body">
                            <h2 className="mb-3 text-danger text-center">Registration</h2>
                            <p className="my-2 fw-bold">Personal Data</p>
                            <form action="">
                                <div className="form-group">
                                    <label htmlFor="" className="fw-bold">Name</label> <br />
                                    <input type="text" name="" placeholder="Input your name" className="form-control"required autoFocus/>
                                </div> 
                                <br />
                                <div className="form-group">
                                    <label htmlFor="" className="fw-bold">Email</label> <br />
                                    <input type="text" name="" placeholder="Input your email" className="form-control"required autoFocus/>
                                </div> <br />
                                <div className="form-group">
                                    <label htmlFor="" className="fw-bold">Password</label> <br />
                                    <input type="password" name="" placeholder="Input your password" className="form-control" required autoFocus/>
                                </div> <br />
                                <div className="form-group">
                                    <label htmlFor="" className="fw-bold">Phone Number</label> <br />
                                    <input type="text" name="" placeholder="Input your phone number" className="form-control"/>
                                </div> <br />
                                <div className="form-group">
                                    <label htmlFor="" className="fw-bold">Address</label> <br />
                                    <input type="text" name="" placeholder="Input your address" className="form-control"/>
                                </div> <br />
                                <button className="btn btn-danger w-100 rounded-pill mb-3" type="submit">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register