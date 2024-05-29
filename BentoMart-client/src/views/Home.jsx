import ControlledCarousel from "../components/carousel"
import Card from "../components/Card"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchLimitSuccess, fetchMenu, fetchMenuSucces } from "../store/actions/actionMenu"
import { useEffect } from "react"

function Home() {
    const dispatch = useDispatch()

    const menus = useSelector((state) => {
        return state.menu.limit
    })

    const isLoading = useSelector((state) => {
        return state.menu.isLoadingLimit
    })

    useEffect(() => {
        handleFetchMenu()
    }, [isLoading])

    const handleFetchMenu = async () => {
        try {
            dispatch(fetchLimitSuccess())
        } catch (error) {
            console.log(error)
        }
    }

    if (isLoading) {
        return <p className="text-center">Loading...</p>
    } else {
        return (
            <section>
                <ControlledCarousel />
                <div className='row container mx-auto justify-content-center mt-5 mb-5'>
                    <div className='col-12 my-3'>
                        <div className='text-center text-danger'>
                            <h3 >RECOMMENDATION</h3>
                        </div>
                    </div>
                </div>

                <div className='container-md w-75'>
                    <div className='row'>
                        {menus.map((menu, i) => (
                            <Card key={i} menu={menu} i={i} />
                        ))}
                    </div>
                </div>
                <div className='row bg-warning mt-5 mx-auto'>
                    <div className='col-12 my-3'>
                        <div className='text-center'>
                            <img src="https://www.hokben.co.id/assets/img/img_banner_2_6.png" alt="" style={{ maxWidth: '50px' }} className="mt-5" />
                            <h4>We Make Sure</h4>
                            <h2 className='text-danger'>Product will never be delivered</h2>
                            <p className="mb-5">For educational purpose only</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default Home