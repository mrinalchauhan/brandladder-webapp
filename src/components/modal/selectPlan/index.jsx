import React from 'react';

import useEmailAuth from '../../../hooks/auth/useEmailAuth';
import { useFirestore } from '../../../context/FirestoreContext'

const SelectPlan = ({ title }) => {

    const { currentUser } = useEmailAuth();
    const { uploadUserData: uploadCartData } = useFirestore

    const handleUploadCartData = async () => {

        const currentDate = new Date();

        const data = {
            plan: title,
            dateOfOrder: currentDate,
        }

        try {
            await uploadCartData(currentUser.uid, 'orders', data)
        } catch (error) {
            console.log("Error while adding data into cart: ", error);
        }
    }

    return (
        <>
            <input className="modal-state" id="modal-1" type="checkbox" />
            <div className="modal">
                <label className="modal-overlay" htmlFor="modal-1"></label>
                <div className="modal-content flex flex-col gap-5 bg-white">
                    <label htmlFor="modal-1" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    <span>
                        You selected servie {title}
                    </span>
                    <div className="flex gap-3">
                        <button className="btn btn-block">Cancel</button>
                        <button className="btn btn-error btn-block" onClick={handleUploadCartData}>Proceed </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectPlan
