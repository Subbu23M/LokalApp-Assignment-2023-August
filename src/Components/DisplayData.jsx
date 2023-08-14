import axios from "axios"
import { useEffect, useState } from "react"
import { FaStar } from "react-icons/fa6"
import { Link } from "react-router-dom"

export const DisplayData = () => {
    const [fetchData, setFetchData] = useState([])

    const baseUrl = 'https://dummyjson.com/products'

    // Logic to fetch data
    const fetchDataByUrl = () => {
        axios
            .get(baseUrl)
            .then((response) => {
                setFetchData(response?.data.products)
            })
            .catch((error) => {
                alert(error.message)
            })
    }
    useEffect(() => {
        fetchDataByUrl()
    }, [])
    return (
        <section>
            <div className="container">
                <div className="row">
                    {
                        fetchData.map((ele) => {
                            const{thumbnail,title,brand,price,rating,discountPercentage,id} = ele
                            return(
                                <div className="col-md-5 col-sm-6 my-3" key={id}>
                                    {/* card */}
                                    <div className="card" >
                                        <Link
                                            to={`${id}`}
                                        >
                                        <img 
                                            src={thumbnail}
                                            alt={title}
                                            className="card-img-top" 
                                        />
                                        <div className="card-body bg-muted">
                                            <h5 className="card-title text-secondary font-weight-bold">
                                                {title}
                                            </h5>
                                            <h6 className="text-secondary font-weight-bold">
                                                {brand}
                                            </h6>
                                            <h6 className="font-weight-bold">
                                                <span className="text-uppercase text-dark">mrp</span> - <span>&#x20b9; </span>{price} 
                                            </h6>
                                            <button className="btn btn-primary text-light btn-sm rounded">
                                                {rating} <i className="text-warning"><FaStar/></i>
                                            </button>
                                            <button className="btn btn-success btn-sm rounded discountBtn">
                                                {discountPercentage} % off
                                            </button>
                                        </div>
                                        </Link>
                                    </div>
                                    {/* end of card */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}