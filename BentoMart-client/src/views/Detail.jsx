import { useEffect } from "react"
import { useParams } from 'react-router-dom';
import { fetchMenu, fetchMenuById } from "../store/actions/actionMenu";
import { useDispatch, useSelector } from "react-redux"

function Detail() {
    const { id } = useParams()
    const dispatch = useDispatch()

    const menu = useSelector((state) => {
        return state.menu.detail
    })

    
    const isLoading = useSelector((state) => {
        return state.menu.isLoadingDetail
    })

    useEffect(() => {
        if(isLoading) {
            handleMenuById()
        }
    }, [isLoading])

    useEffect(() => {
        handleMenuById();
    }, [id]);

    const handleMenuById = async () => {
        try {
            dispatch(fetchMenuById(id))
        } catch (error) {
            console.log(error)
        }
    }

    if(isLoading) {
        return <p className="text-center">Loading...</p>
    } else {
        return (
            <div className="">
                <div className="row bg-warning mx-auto">
                    <div className="col-12 my-3">
                        <div className="container d-flex">
                            <h3 className="mx-auto my-auto text-white fw-bold">{menu.name} | ほかべん祭り</h3>
                        </div>
                    </div>
                </div>
                <div className="container-md w-75">
                    <div className="row">
                        <div className="col-12 my-3">
                            <div className="row">
                                <div className="col-12 col-md-6 my-3 my-md-auto">
                                    <img src={menu.imgUrl} alt="" className="rounded" />
    
                                </div>
                                <div className="col-12 col-md-6 my-3 my-md-auto">
                                    <h5>Rp. {menu.price}</h5>
                                    <div className="small text-secondary">Ingredients:</div>
                                    {menu.Ingredients.map((e) => (
                                    <div className="small fw-bold mb-2" key={e.id}>{e.name}</div>
                                    ))}
                                    <div className="text-secondary small">Description:</div>
                                    <div className="small fw-bold mb-3">{menu.description}</div>
                                    <div className="d-flex justify-content-start">
                                        <button className="btn btn-danger rounded-pill me-2">Back</button>
                                        <button className="btn btn-warning rounded-pill mx-2">+ Order</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Detail