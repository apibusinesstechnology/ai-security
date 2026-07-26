"use client"
import Image from "next/image";
import "./PageBienvenue.css";

export default function PageBienvenue(){

    return(

        <div className="FondEcran">
            <div>
                <Image src="/logo.png" alt="Logo de Ai security" width={150} height={150}/> 
                <h1><span>Bienvenue </span></h1>
                <h1><span>AI SECURITY</span></h1>
            </div>
            
            <div id="boiteButton">
                <button>
                    Inscription
                </button> 

                <button>
                    Se connecter
                </button> 
            </div>
             
        </div>
    );
}
