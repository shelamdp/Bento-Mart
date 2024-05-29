import { Link } from "react-router-dom"

function Card({menu}) {
    return (
        <div className='col-6 col-md-4 mb-5 mx-auto'>
        <div className='card card-rounded'>
          <div className='card-body d-flex flex-column text-center'>
            <img src={menu.imgUrl} alt="" className='rounded img-fluid' />
            <p>{menu.name}</p>
            <p >お得なセット</p>
            <p>Rp {menu.price}</p>
          </div>
          <div className='form-inline mt-3 mb-0 d-flex justify-content-around'>
            <Link to={"/detail/" + menu.id} href="" className='btn btn-danger mb-4 rounded-pill'>Details</Link>
            <a  className='btn btn-warning mb-4 rounded-pill cursor-pointer'>+ Order</a>
          </div>
        </div>
      </div>
    )
}

export default Card