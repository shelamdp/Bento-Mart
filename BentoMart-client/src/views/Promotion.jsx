function Promotion() {
    return (
        <div>
            <div className="row bg-warning mx-auto">
                <div className="col-12 my-3">
                    <div className="container d-flex">
                        <h3 className="mx-auto my-auto text-white fw-bold">CURRENT PROMOTION | プローモー ライト ナウ</h3>
                    </div>
                </div>
            </div>
            <div className="container-md w-75">
                <div className="row">
                    <div className="card card-rounded w-100 my-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12 col-md-8">
                                    <img src="https://hokben-images.s3.ap-southeast-3.amazonaws.com/news/90b564ec9844730ddd83b635f00ee4c0-1685410706797" alt="" className="img-fluid rounded mt-3 mb-3"/>
                                </div>
                                <div className="col-12 col-md-4 my-auto mt-3">
                                    <h3 className="text-danger fw-bold ms-5">JAGOAN</h3>
                                    <div className="fw-bold ms-5">
                                        Only at 2-5pm | Rp 25.000
                                    </div>
                                    <div className="fw-bold ms-5">
                                        Dine in only
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promotion