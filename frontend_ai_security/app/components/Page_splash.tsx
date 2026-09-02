'use client';
import Image from 'next/image';
import './Page_splash.css';

export default function Splah() {
  return (
    <div className="FondEcran">
      <Image src="/logo.png" alt="Logo de Ai security" width={150} height={150} />
      <h1>
        <span>AI SECURITY</span>
      </h1>
      <p id="p">Proteger, prevenir securiser.</p>
      <p>Une plateforme intelligente pour la securité.</p>
    </div>
  );
}
