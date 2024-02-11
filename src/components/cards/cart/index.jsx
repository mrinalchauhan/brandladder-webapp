import React from 'react';

import { useAuth } from '../../../context/AuthContext';
import { useFirestore } from '../../../context/FirestoreContext';

import { CiCircleMinus } from "react-icons/ci";

const CartCard = ({ title, desc, date, orderId }) => {

    const { deleteSubdocument } = useFirestore();
    const { currentUser } = useAuth();

    const firstTenWords = desc?.split(' ').slice(0, 10).join(' ');

    const handleDelteItemfromCart = async () => {
        try {
            await deleteSubdocument('users', currentUser.uid, 'orders', orderId)
        } catch (error) {
            console.error('Error while deleting item from cart; ', error)
        }
    }

    return (
        <div className="card max-w-full bg-orange-2">
            <div className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className='col-span-4'>
                        <h2 className="card-header text-lg">
                            {title}
                        </h2>
                        <p className="text-sm text-black">
                            {firstTenWords}
                        </p>
                        <small className='xs' >
                            {date}
                        </small> <br />
                        <small className='xs' >
                            <b>Order ID : </b> {orderId}
                        </small>
                    </div>
                    <div className="card-footer col-span-1">
                        <button className="btn-outline btn text-orange-10 hover:text-orange-3 hover:bg-orange-10 transition-all ease-in-out duration-300 border-none shadow-2xl" onClick={handleDelteItemfromCart}>
                            <CiCircleMinus className='text-xl my-auto' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard
