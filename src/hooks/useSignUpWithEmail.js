import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from '../firebase/firebase'
import { setDoc, doc } from 'firebase/firestore';

const useSignUpWithEmail = () => {
  const [
    createUserWithEmailAndPassword,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const signup = async (inputs) => {
    console.log(inputs)
    if(!inputs.email || !inputs.password || !inputs.username || !inputs.fullName) {
      console.log("Please fill all the fields")
      return
    }
    try{
      const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)
      if (!newUser && error) {
        console.log(error)
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
        localStorage.setItem("user-info", JSON.stringify(userDoc))
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  return {loading, error, signup}
}

export default useSignUpWithEmail