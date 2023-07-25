import { useEffect, useState, useContext } from 'react';
import AuthImage from '../component/Auth/AuthImage';
import Form from '../UI/Form';
import AuthWelcomeMessage from '../component/Auth/AuthWelcomeMessage';
import AuthRedirectMessage from '../component/Auth/AuthRedirectMessage';
import { registerData } from '../data';
import { registerSchema } from '../lib/schemas';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext } from '../store/AuthContext';

const Register = () => {
  const { currentUser } = useContext(AuthContext);

  const submitForm = async function (data) {
    const { email, password } = data;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    // Add a new document in collection "cities"
    await setDoc(doc(db, 'user', currentUser.uid), {
      ...data,
      admin: false,
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <AuthImage />
      <div className="px-6 md:px-24 py-24 bg-white">
        <AuthWelcomeMessage />
        <Form
          data={registerData}
          submitForm={submitForm}
          isLoginForm={false}
          buttonName="Sign up"
          schema={registerSchema}
        />
        <AuthRedirectMessage isLogin={false} />
      </div>
    </div>
  );
};

export default Register;
