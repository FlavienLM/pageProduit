import './CartePanier.css'
import { GestionProduit } from '../../DefinitionProduits';
import { useContext } from 'react';
import PropTypes from 'prop-types';

function CartePanier(props){

    const contextGestionProduit = useContext(GestionProduit);

    const id = props.produit.id;
    const quantite = props.produit.quantite;
    const produit = contextGestionProduit.getProduit(id);
    const nom = produit.nomProduit;
    const prix = produit.prix;
    const image = produit.imageProduit;

    return (
        <>
            <h3>{nom}</h3>
            <img src={image} className='imagePanier' alt="imageProduit"/>
            <h3>{prix}€</h3>
            <p className='quantite'> x{quantite}</p>
        </>
        
    );
}

CartePanier.propTypes = {
    produit : PropTypes.object,
}

export default CartePanier;