function ButtonCategory({category}) {
    return (
        <a  className="small flex-fill rounded-pill text-center nav-link mx-1 my-1 active bg-danger cursor-pointer">
            <div className="d-flex flex-row flex-md-column justify-content-center">
                <div className="py-0 px-0 mr-2 mr-md-0">{category.name}</div>
            </div>
        </a>

    )
}

export default ButtonCategory