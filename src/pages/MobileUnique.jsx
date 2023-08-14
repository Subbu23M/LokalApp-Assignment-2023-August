import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {FaStar} from 'react-icons/fa6'
import axios from "axios"

export const MobileUnique = () => {
    // Logic to collect unique id for each product
    const {
        id
    } = useParams();

    const [fetchData, setFetchData] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const baseUrl = `https://dummyjson.com/products/${id}`

    // Logic to fetch data
    useEffect(() => {
        axios
            .get(baseUrl)
            .then((response) => {
                setFetchData(response?.data)
                setIsLoading(!isLoading)
            })
            .catch((error) => {
                alert(error.message)
            })
    }, [baseUrl])

    const {
        thumbnail,
        title,
        brand,
        price,
        rating,
        discountPercentage,
        description,
        category,
        stock
    } = fetchData

    const finalResult = (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 my-2">
                        {
                            thumbnail && <img src={thumbnail} alt={title} className="img-fluid border border-3 rounded"/>
                        }
                        <h1 className="font-weight-bold mt-5">
                            {title}
                        </h1>
                        <h3 className="font-weight-bold mt-2">
                            {brand}
                        </h3>
                        <div className="price-section d-flex justify-content-evenly align-items-center">
                            <div className="mr-4">
                                <h6 className="font-weight-bold">
                                    <span className="text-uppercase text-dark">mrp</span> - <span>&#x20b9; </span>{price} 
                                </h6>
                            </div>
                            <div>
                                <button className="btn btn-success btn-sm rounded">
                                    {discountPercentage} % off
                                </button>
                            </div>
                        </div>
                        <button className="btn btn-primary text-light btn-md rounded">
                            {rating} <i className="text-warning"><FaStar/></i>
                        </button>
                        <hr />
                        <div className="font-weight-bold">
                            <h2>
                                Description:
                            </h2>
                            <p className="lead display-4">
                                {description}
                            </p>
                            <h4 className="mt-3 display-4">
                                Category: {category}
                            </h4>
                            <h5 className="mt-2 display-4">
                                Stock: {stock}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    return (
        <>
        {
            isLoading ? <h2>Loading....</h2> : finalResult
        }
        </>
    )
}