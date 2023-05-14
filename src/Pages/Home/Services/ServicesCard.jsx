import { Link } from "react-router-dom";


const ServicesCard = ({ service }) => {
    const { _id,title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title }</h2>
                <p className="text-orange-500">Price: {price }</p>
                <div className="card-actions ">
                    <Link to={`/checkout/${_id}`}> <button className="btn btn-primary">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;