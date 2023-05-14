import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCart = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, details, photo,} = coffee;
    const handleDeleteItem = (_id) => {
        console.log('deleted successfully')

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                console.log('delete confirmed')
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining)
                        }
                    })

            }
        })
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex w-full justify-between">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                    <p>{details}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4 pr-4 pb-2">
                        <button className="btn btn-outline btn-info">View</button>
                        <Link to={`/updateCoffee/${_id}`}><button className="btn btn-outline">Edit</button></Link>
                        <button
                            onClick={() => handleDeleteItem(_id)}
                            className="btn btn-outline btn-error">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCart;