import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://y-peach-eight.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
        
    return (
        <div className="mt-5">
            <div className="text-center">
                <h3 className="text-3xl text-orange-600">Our services</h3>
                <h3 className="text-5xl">Our services Are</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni qui animi sint asperiores, cumque doloremque ex commodi repudiandae!<br></br> Ab nihil eum, perferendis esse earum saepe assumenda ad asperiores corrupti ipsum?</p>
            </div> 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                    service={service}></ServicesCard>)
                        }
               
            </div> 
        </div>
    );
};

export default Services;