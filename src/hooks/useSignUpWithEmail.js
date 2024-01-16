// import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from '../firebase/firebase'
import { setDoc, doc } from 'firebase/firestore';
import useShowToast from "./useShowToast";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

const useSignUpWithEmail = () => {
  // const [
  //   createUserWithEmailAndPassword,
  //   loading,
  //   error,
  // ] = useCreateUserWithEmailAndPassword(auth);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState();

  const showToast = useShowToast();

  const signup = async (inputs) => {
    setIsLoading(true);
    if(!inputs.email || !inputs.password || !inputs.username || !inputs.fullName) {
      showToast("error", "Please fill all the fields", "error");
      return
    }
    try{
      const newUser = await createUserWithEmailAndPassword( auth, inputs.email, inputs.password)
      console.log(newUser);
      if (!newUser) {
        showToast("Error", "Something went wrong", "error");
        return
      }
      if(newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.username,
          fullName: inputs.fullName,
          bio: "",
          profilePicURL: "",
          following: [],
          followers: [],
          posts: [],
          createdAt: Date.now()
        }

        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        setIsLoading(false);
      }
    }
    catch (err) {
      console.log(err.message)
      showToast("Error", err.message, "error");
      setError(err)
      setIsLoading(false)
    }
  }
  return {isLoading, signup, error}
}

export default useSignUpWithEmail