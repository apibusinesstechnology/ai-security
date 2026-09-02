// @ts-nocheck
"use client"
import Image from "next/image";
import "./PageBienvenue.css";
import Link from "next/link";
import { DocsLinkButton } from "next/dist/next-devtools/dev-overlay/components/errors/error-overlay-toolbar/docs-link-button";

export default function PageBienvenue(){

    return(

        <div className="FondEcran">
            <div>
                <Image src="/logo.png" alt="Logo de Ai security" width={150} height={150}/> 
                <h1><span>Bienvenue </span></h1>
                <h1><span>AI SECURITY</span></h1>
            </div>
            
            <div id="boiteButton">
                <Link href="/" className="bouton">
                     Inscription
                </Link>
                <Link href="/loginForm" className="bouton">
                    Se connecter
                </Link>
            </div>
             
        </div>
    );
}
