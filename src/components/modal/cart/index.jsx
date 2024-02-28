import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useFirestore } from '../../../context/FirestoreContext';
import { useAuth } from '../../../context/AuthContext';

import CartCard from '../../cards/cart';
import { MdOutlineCancel } from 'react-icons/md';

const CardModal = () => {

    const [cartData, setCartData] = useState(null);

    const { getAllSubdocumentData } = useFirestore();
    const { currentUser } = useAuth()


    useEffect(() => {
        const handleGetCartData = async () => {
            try {
                const res = await getAllSubdocumentData('users', currentUser.uid, 'orders')
                // console.log(res)
                setCartData(res);

            } catch (error) {
                console.log("Error while fetching cart data: ", error);
            }
        }
        handleGetCartData()

    }, [currentUser.uid, getAllSubdocumentData])

    // console.log(cartData)

    return (
        <div>
            <input className="modal-state" id="modal-3" type="checkbox" />
            <div className="modal">
                <label className="modal-overlay"></label>
                <div className="modal-content flex flex-col gap-5 bg-white">
                    <label
                        htmlFor="modal-3"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black hover:bg-orange-2"
                    >
                        <MdOutlineCancel />
                    </label>
                    <h2 className="text-xl">My Bag</h2>

                    <section>
                        {
                            cartData ? (
                                cartData.map((item) => (
                                    <div className="my-2" key={item.id}>
                                        <CartCard
                                            title={item.plan}
                                            date={item.dateOfOrder.toDate().toLocaleDateString()}
                                            orderId={item.id}
                                        />
                                    </div>
                                ))
                            ) : (
                                <>
                                    <h2>No Plan Selected</h2>
                                    <Link to='/services' >
                                        <button
                                            className="btn btn-outline bg-inherit border-orange-6 text-black shadow-md transition-all ease-in-out duration-500 hover:bg-orange-6 hover:text-orange-2 hover:shadow-2xl hover:border-orange-6 w-full">
                                            See All Services
                                        </button>
                                    </Link>
                                </>
                            )
                        }
                    </section>

                    {/* <section>
                        {
                            cartData?.map((data, index) => {
                                return (
                                    <div className="my-2" key={index}>
                                        <CartCard
                                            title={data.plan}
                                            date={data.dateOfOrder}
                                        />
                                    </div>
                                )
                            })
                        }
                    </section> */}
                </div>
            </div>
        </div>
    )
}

export default CardModal
