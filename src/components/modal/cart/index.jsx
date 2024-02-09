import React, { useState, useEffect } from 'react';
import { useFirestore } from '../../../context/FirestoreContext';
import { useAuth } from '../../../context/AuthContext';

import CartCard from '../../cards/cart';
import { MdOutlineCancel } from 'react-icons/md';

const CardModal = () => {

    const [cartData, setCartData] = useState(null);

    const { getDocumentData } = useFirestore();
    const { currentUser } = useAuth()

    const handleGetCartData = async () => {
        try {
            const res = await getDocumentData(currentUser.uid, 'orders')

            setCartData(res);

        } catch (error) {
            console.log("Error while fetching cart data: ", error);
        }
    }

    useEffect(() => {
        handleGetCartData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                    </section>
                </div>
            </div>
        </div>
    )
}

export default CardModal
