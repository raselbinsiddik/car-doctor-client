import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `https://y-peach-eight.vercel.app/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization:`Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [url]);
    
    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete');
        if (proceed) {
            fetch(`https://y-peach-eight.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
        }
    }

    const handleBookingConfirm = id => {
        fetch(`https://y-peach-eight.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
               'content-type':'application/json'
            },
            body: JSON.stringify({status:'confirm'})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);


                }
        })
    }
    return (
        <div>
            <h2 className="text-5xl">your booking: {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="ms-0">
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>price</th>
                            <th>details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                            handleBookingConfirm={handleBookingConfirm}>   
                            </BookingRow>)
                       }
                        </tr>
                    </tbody>

                </table>
            </div>
           
        </div>
    );
};

export default Bookings;