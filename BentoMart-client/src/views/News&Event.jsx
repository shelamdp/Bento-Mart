function News() {
    return (
        <div>
            <div className="row bg-warning mx-auto">
                <div className="col-12 my-3">
                    <div className="container d-flex">
                        <h3 className="mx-auto my-auto text-white fw-bold">NEWS & EVENTS | ニュ―ス＆イベント</h3>
                    </div>
                </div>
            </div>
            <div className="container-md w-75">
                <div className="row">
                    <div className="col-12 col-md-4 mb-3">
                        <div className="text-center">
                            <img src="https://hokben-images.s3.ap-southeast-3.amazonaws.com/img_assets/news/Employee-Children-s-Scholarship_1591684034303.jpg" alt="" className="mt-5 mb-3 img-fluid rounded" style={{height:"250px", width: "300px"}}/>
                            <p className="fw-bold">Beasiswa Anak Karyawan</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-3">
                        <div className="text-center">
                            <img src="https://hokben-images.s3.ap-southeast-3.amazonaws.com/img_assets/news/47_1588928167052.jpg" alt="" className="mt-5 mb-3 img-fluid rounded" style={{height:"250px", width: "300px"}}/>
                            <p className="fw-bold">Donor Darah Eksternal</p>
                        </div>
                        
                    </div>
                    <div className="col-12 col-md-4 mb-3">
                        <div className="text-center">
                            <img src="https://hokben-images.s3.ap-southeast-3.amazonaws.com/img_assets/news/csr_9.png" alt="" className="mt-5 mb-3 img-fluid" style={{height:"250px", width: "300px"}}/>
                            <p className="fw-bold">Program Perkembangan Perpustakaan</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News