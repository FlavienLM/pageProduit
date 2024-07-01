import './NouveauProduit.css'
import { useContext,useState,useEffect } from "react";
import { GestionProduit } from "../../DefinitionProduits";
import PropTypes from 'prop-types';
function NouveauProduit({ produitSelectionne, setProduit, admin}) {

    const contextGestionProduit = useContext(GestionProduit);
    const [affichageMenu,setAffichageMenu] = useState(true);

    function handleNomChange(event){
        setProduit({...produitSelectionne,nomProduit:event.target.value});
    }

    function handleImageChange(event){
        setProduit({...produitSelectionne,imageProduit:event.target.value});
    }

    function handlePrixChange(event){
        setProduit({...produitSelectionne,prix:event.target.value});
    }

    function handleSubmit(event){
        event.preventDefault();

        if(produitSelectionne.nomProduit == ""){
            return false;
        }
        if(produitSelectionne.prix <= 0){
            return false;
        }
        if(produitSelectionne.imageProduit == ""){
            return false;
        }

        if(produitSelectionne.id == -1){
            const idProduit = contextGestionProduit.produits.length;
            contextGestionProduit.ajouteProduit(
                produitSelectionne.nomProduit,
                produitSelectionne.prix,
                produitSelectionne.imageProduit,
                idProduit);
        }else{
            contextGestionProduit.modifieProduit(
                produitSelectionne.nomProduit,
                produitSelectionne.prix,
                produitSelectionne.imageProduit,
                produitSelectionne.id);
        }


        remplieFormulaire();
    }

    function clearFormulaire(){
        setProduit({
            nomProduit: "",
            prix: 0,
            imageProduit: "",
            id: -1,
        })
    }

    function fermeMenu(){
        setAffichageMenu(!affichageMenu);
        clearFormulaire();
    }

    useEffect(() => {
        if(produitSelectionne.id == -1){
            return;
        }
        setAffichageMenu(false);
    }, [produitSelectionne]);

    return(
        <><div className={admin && affichageMenu === false ? "nouveauProduit" : "displayNone"}>
            <button 
            className='fermeMenu'
            onClick={() => fermeMenu()}
            >X</button>
            <h1 id='nouveauProduitText'>{produitSelectionne.id === -1 ? "Nouveau produit" : "Modifier produit " + produitSelectionne.nomProduit}</h1>
            <form className='formulaireNouveauProduit'>
                <p>Nom</p>
                <input type="text" value={produitSelectionne.nomProduit} onChange={handleNomChange} />

                <p>Prix</p>
                <input type="number" value={produitSelectionne.prix} onChange={(handlePrixChange)} />

                <p>Image</p>
                <input type="text" value={produitSelectionne.imageProduit} onChange={(handleImageChange)} /> <br />
                <input type="submit" value="Confirmer" className='confirmer' onClick={handleSubmit} />

                <img src={produitSelectionne.imageProduit} className='imageNouveauProduit' alt="imageProduit"/>
            </form>
        </div>
        <button 
        className={admin && !affichageMenu === false ? "nouveauProduitBouton" : "displayNone"}
        onClick={() => setAffichageMenu(!affichageMenu)}
        >Nouveau produit</button></>
    )
}

NouveauProduit.propTypes = {
    produitSelectionne: PropTypes.object,
    setProduit: PropTypes.func,
    admin: PropTypes.bool,
}

export default NouveauProduit;