"use client";
import Image from "next/image";
import "./AfficherLogin.css";
// ex: app/login/page.tsx oswa pages/login.tsx
import SecureLoginForm from "../components/LoginForm";

type LoginData = {
  email: string;
  password: string;
  smsCode: string;
};


export default function LoginPage() {
  
    const handleLogin = async ({ email, password, smsCode }: LoginData) => {
    console.log({ email, password, smsCode });
  };

 return (
    <div className="Afficher">
      <Image src="/logo.png" alt="Logo de Ai security" width={150} height={150}/> 
      <SecureLoginForm onSubmit={handleLogin} />
    </div>
  );
}
