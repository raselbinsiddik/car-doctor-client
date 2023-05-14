

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    
    const {_id, date, service, price, img, status } = booking;
    
   
    return (
        <>
           
                <td>
                <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                </td>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-24 h-24">
                                {img &&
                                    <img src={img} alt="Avatar Tailwind CSS Component" />
                               }
                            </div>
                        </div>
                    </div>
            </td>
                <td>
                   {date}
                </td>
            <td>{service}</td>
            <td>
                <div className="font-bold">{price}
                </div>
            </td>
                <th>
                {status === 'confirm'? <span className="text-purple-700 font-bold">Confirm</span>:
                    <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                }
                </th>
            
        </>
    );
};

export default BookingRow;