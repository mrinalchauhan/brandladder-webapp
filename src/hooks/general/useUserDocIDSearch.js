import { useState, useEffect } from 'react';
import { useFirestore } from '../../context/FirestoreContext';
import useEmailAuth from '../auth/useEmailAuth';

const useUserDocIDSearch = () => {
    const [docIds, setDocIds] = useState([]);
    const [isPresent, setIsPresent] = useState(false);

    const { currentUser } = useEmailAuth()
    const { getAllDocumentIds } = useFirestore();

    useEffect(() => {
        const fetchAllIds = async () => {
            try {
                const res = await getAllDocumentIds('users');
                setDocIds(res.sort()); // Sort the docIds array
            } catch (error) {
                console.error("Error while fetching docIds: ", error);
            }
        };

        fetchAllIds();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Binary search implementation
    const binarySearch = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                return true;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return false;
    };


    useEffect(() => {
        if (docIds.length > 0) {
            const index = binarySearch(docIds, currentUser ? currentUser.uid : '');
            setIsPresent(index);
        }
    }, [docIds, currentUser]);

    return { docIds, isPresent };
};

export default useUserDocIDSearch;
