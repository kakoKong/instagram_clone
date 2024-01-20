import { useEffect, useState } from 'react'
import useShowToast from './useShowToast';
import { firestore } from '../firebase/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import useUserProfileStore from '../store/userProfileStore';

const useGetUserProfileByUsername = ( username ) => {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();
  const {userProfile, setUserProfile} = useUserProfileStore()

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true)
      try {
        const q = query(collection(firestore, "users"), where("username", "==", username));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty){
          setIsLoading(false)
          return setUserProfile(null);
        } 
        let userDoc;
        querySnapshot.forEach((doc) => {
          userDoc = doc.data();
        });
        setUserProfile(userDoc);
      }
      catch (err) {
        showToast("Error", err.message, "error");
      }
      setIsLoading(false)
    }
    getUserProfile();
  }, [setUserProfile, username, showToast])

  return { isLoading, userProfile }
}

export default useGetUserProfileByUsername