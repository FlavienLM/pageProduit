import { useState } from "react";
import NouveauProduit from "./components/NouveauProduit/NouveauProduit";
import ListeProduit from "./components/ListeProduits";
import Panier from "./components/Panier";
function PagePrincipal(){

    const [admin,setAdmin] = useState(false);

    const[produitSelectionne,setProduitSelectionne] = useState({
        prix: 0,
        nomProduit: "",
        imageProduit: "",
        id: -1
    });

    return(
        <>
        <header>
            <div>
                <ul className="navbar">
                    <li className="li-navbar">Accueil</li>
                    <li className="li-navbar">À propos</li>
                    <li className="li-navbar">Contact</li>
                    <li className="li-navbar navbarBouton" onClick={() => setAdmin(!admin)} >
                        {admin ? "Mode client" : "Mode admin"}</li>
                </ul>
            </div>
        </header>
            <div className="principal">
                <ListeProduit produitSelectionne={produitSelectionne} setProduit={setProduitSelectionne} admin={admin}></ListeProduit>
                <Panier admin={admin}></Panier>
            </div>
            <NouveauProduit produitSelectionne={produitSelectionne} setProduit={setProduitSelectionne} admin={admin}></NouveauProduit>
        </>
    );
}

export default PagePrincipal