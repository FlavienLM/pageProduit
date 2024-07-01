import CarteProduit from "./CarteProduit/CarteProduit";
import { GestionProduit } from "../DefinitionProduits"
import { OperationPanier } from "../GestionPanier";
import {  useContext } from "react";
import "./CarteProduit/CarteProduit.css"
import PropTypes from 'prop-types';
function ListeProduit({produitSelectionne, setProduit, admin}){


    const contextOperationPanier = useContext(OperationPanier);
    const contextGestionProduit = useContext(GestionProduit);

    function getClassNameListeProduits(admin, produit, produitSelectionne) {
        if (!admin) {
            return "carteProduit";
        }
        return produit.id === produitSelectionne.id ? "carteProduitSelected" : "carteProduitAdmin";
    }



    return(
        <div className="listeProduits">
            {contextGestionProduit.produits.map((produit) => (
                <div 
                key={produit.id} 
                className={getClassNameListeProduits(admin, produit, produitSelectionne)}
                >
                    <CarteProduit produitInfo={produit}></CarteProduit>
                    {admin === false ? 
                    <button 
                    onClick={() => contextOperationPanier.ajouteProduit(produit.id)}
                    className="ajouterPanier"
                    >Ajouter au panier</button> 
                    : 
                    <button 
                    onClick={() => setProduit(contextGestionProduit.getProduit(produit.id))}
                    className="modifierProduit"
                    >Modifier produit</button>}
                </div>
            ))}    
        </div>
    );
}; 

ListeProduit.propTypes = {
    produitSelectionne: PropTypes.object,
    setProduit: PropTypes.func,
    admin: PropTypes.bool,
}

export default ListeProduit;