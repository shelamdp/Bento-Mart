function Outlet() {
    return (
        <div>
            <div className="row bg-warning mx-auto">
                <div className="col-12 my-3">
                    <div className="container d-flex">
                        <h3 className="mx-auto my-auto text-white fw-bold">OUTLET | アウトレット</h3>
                    </div>
                </div>
            </div>
            <div className="container-md w-75">
                <div className="row">
                    <div className="col-12 my-3">
                        <div className="card card-rounded">
                            <div className="card-body">
                                <div className="form-group d-flex">
                                    <label htmlFor="" className="col-12 col-md-2 my-auto col-form-label">Find Location: </label>
                                    <div className="col-12 col-md-10">
                                        <div className="input-group ">
                                            <input type="text" className="form-control" />
                                            <div className="input-group-append">
                                                <button type="button" className="btn btn-outline-secondary">
                                                    <i className="bi bi-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-3">
                        <img src="https://i.imgur.com/hcL5vmo.jpg" alt="" className="rounded img-fluid mx-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Outlet