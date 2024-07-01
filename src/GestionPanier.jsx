import { createContext,useState,useContext, useMemo } from "react";
import { GestionProduit } from "./DefinitionProduits";
import PropTypes from 'prop-types';

export const OperationPanier = createContext({
    produits: [],
    ajouteProduit: () => {},
    enleveProduit: () => {},
    supprimeProduit: () => {},
    quantiteProduit: () => {},
    totalPrixProduits: () => {},
    validePanier: () => {},
})

export function GestionPanier ({children}){

    const contextGestionProduit = useContext(GestionProduit);

    const [produitPanier,setProduitPanier] = useState([]);

    function ajouteProduit(id){
        const quantite = quantiteProduit(id);
        if(quantite === 0){
            setProduitPanier([...produitPanier,{id:id,quantite:1}]);
        }else{
            setProduitPanier(
                produitPanier.map(produit =>
                    produit.id === id 
                    ? {...produit, quantite: produit.quantite+1}
                    :
                    produit
                )
            )
        }
    }

    function enleveProduit(id){
        const quantite = quantiteProduit(id);
        if(quantite == 1){
            supprimeProduit(id);
        }else{
            setProduitPanier(
                produitPanier.map(produit =>
                    produit.id == id 
                    ? {...produit, quantite: produit.quantite-1}
                    :
                    produit
                )
            )
        }
    }

    function supprimeProduit(id){
        setProduitPanier(produitPanier.filter(produit => produit.id != id));
    }

    function quantiteProduit(id){
        const quantite = produitPanier.find(produit => produit.id == id)?.quantite;
        if(quantite == undefined){
            return 0;
        }
        return quantite;
    }

    function totalPrixProduits(){
        let total = 0;
        produitPanier.map(produit => {
            const infoProduit = contextGestionProduit.getProduit(produit.id);
            total+= (infoProduit.prix * produit.quantite);
        })
        return total;

    }

    function validePanier(){
        setProduitPanier([]);
    }


    const Operation = useMemo(() => ({
        produits: produitPanier,
        ajouteProduit,
        enleveProduit,
        supprimeProduit,
        quantiteProduit,
        totalPrixProduits,
        validePanier
    }));

    return (
        <OperationPanier.Provider value={Operation}>
            {children}
        </OperationPanier.Provider>
    

    );

};

GestionPanier.propTypes = {
    children: PropTypes.node,
}




export default GestionPanier