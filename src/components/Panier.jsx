import { OperationPanier } from '../GestionPanier';
import { useContext } from 'react';
import CartePanier from './CartePanier/CartePanier';
import './CartePanier/CartePanier.css'
import PropTypes from 'prop-types';
function Panier ({admin}){

    const contextOperationPanier = useContext(OperationPanier);

    return (
        <div className={admin === false ? "panier" : "displayNone"}>
                {contextOperationPanier.produits.map((produit) => (
                    <div key={produit.id}>
                    <CartePanier produit={produit}/>
                        <button onClick={() => contextOperationPanier.ajouteProduit(produit.id)} className='ajoutePanier'>+</button>
                        <button onClick={() => contextOperationPanier.enleveProduit(produit.id)} className='enlevePanier'>-</button>
                        <button onClick={() => contextOperationPanier.supprimeProduit(produit.id)} className='supprimerPanier'>Supprimer</button>
                    </div>
                    
                ))}
                <h1>{contextOperationPanier.produits.length > 0 ? "TOTAL " + contextOperationPanier.totalPrixProduits() : "Panier vide"}</h1>

                <button className={contextOperationPanier.produits.length > 0 ? 'valider' : "displayNone"} onClick={() => contextOperationPanier.validePanier()}>Valider</button>
        </div>

    );

};

Panier.propTypes = {
    admin: PropTypes.bool,
}

export default Panier;

