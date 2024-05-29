import ControlledCarousel from "../components/carousel"
function Contact() {
    return (
        <div>
            <div className="row bg-warning mx-auto">
                <div className="col-12 my-3">
                    <div className="container d-flex">
                        <h3 className="mx-auto my-auto text-white fw-bold">CONTACT US | コンタクト アス</h3>
                    </div>
                </div>
            </div>
            <div className="container-md w-75">
                <div className="row mt-5">
                    <ControlledCarousel/>
                </div>
            </div>
        </div>
    )
}

export default Contact