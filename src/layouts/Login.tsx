import React from "react";
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { auth } from "../lib/firebase";
import { FaGoogle, FaGithub, FaCloudSun } from "react-icons/fa";

const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      onLogin();
    } catch (error) {
      console.error("Error al iniciar sesión con Google", error);
    }
  };

  const handleGithubSignIn = async () => {
    try {
      await signInWithPopup(auth, new GithubAuthProvider());
      onLogin();
    } catch (error) {
      console.error("Error al iniciar sesión con GitHub", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-10 backdrop-blur-md">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-[400px] text-center border border-blue-200">
        <FaCloudSun data-testid="login-icon" className="text-blue-800 text-6xl mx-auto mb-4 animate-pulse" />
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Weather App</h2>
        <p className="text-gray-600 mb-6 text-lg">Inicia sesión para continuar</p>
        
        <div className="flex flex-col gap-4">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg text-lg"
          >
            <FaGoogle className="mr-3 text-2xl" /> Iniciar con Google
          </button>

          <button
            onClick={handleGithubSignIn}
            className="flex items-center justify-center w-full bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg text-lg"
          >
            <FaGithub className="mr-3 text-2xl" /> Iniciar con GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;