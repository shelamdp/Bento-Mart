import Card from "../components/Card"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMenuSucces } from "../store/actions/actionMenu"
import ButtonCategory from "../components/Button"
import { fetchCategorySuccess } from "../store/actions/actionCategory"


function Menu() {
    const dispatch = useDispatch()

    const menus = useSelector((state) => {
        return state.menu.menu
    })

    const isLoading = useSelector((state) => {
        return state.menu.isLoadingAllMenu
    })

    const categories = useSelector((state) => {
        return state.category.category
    })

    useEffect(() => {
        if(isLoading) {
            handleMenu(),
            handleCategory()
        }
    }, [isLoading])

    const handleMenu = async () => {
        try {
            dispatch(fetchMenuSucces())
        } catch (error) {
            console.log(error)
        }
    }

    const handleCategory = async () => {
        try {
            dispatch(fetchCategorySuccess())
        } catch (error) {
            console.log(error)
        }
    }

    if(isLoading) {
        return <p className="text-center">Laoding...</p>
    } else {
        return (
            <div>
                <div className="row bg-warning mx-auto">
                    <div className="col-12 my-3">
                        <div className="container d-flex">
                            <h3 className="mx-auto my-auto text-white fw-bold">MENU | メニュー</h3>
                        </div>
                    </div>
                </div>
                <div className="container-md w-75">
                    <div className="row">
                        <div className="col-12 col-md-10 mx-md-auto col-xl-12">
                            <div className="nav nav-pills flex-column flex-sm-row my-3">
                                {categories.map((category, i) => (
                                    <ButtonCategory key={i} category={category} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-md w-75 mb-5">
                    <div className='row'>
                        {menus.map((menu, i) => (
                            <Card key={i} menu={menu} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Menu