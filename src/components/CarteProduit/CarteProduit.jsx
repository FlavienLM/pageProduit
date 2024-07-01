import './CarteProduit.css'
import PropTypes from 'prop-types';

function CarteProduit(props){

    const produitInfo = props.produitInfo;
    const nomProduit = produitInfo.nomProduit;
    const prix = produitInfo.prix;
    const imageProduit = produitInfo.imageProduit;

    return (
        <>
            <img src={imageProduit}  className='imageCarteProduit' alt="imageProduit"/>
            <p>{nomProduit}</p>
            <p>{prix}€</p>   
        </>
    );
}

CarteProduit.propTypes = {
    produitInfo: PropTypes.object,
    nomProduit: PropTypes.string,
    prix: PropTypes.number,
    imageProduit: PropTypes.string,
}

export default CarteProduit;