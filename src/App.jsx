import './App.css'
import GestionPanier from './GestionPanier';
import { DefinitionProduits } from './DefinitionProduits';
import PagePrincipal from './PagePrincipal';

function App() {

  return (
    <DefinitionProduits>
      <GestionPanier>
        <PagePrincipal/>
      </GestionPanier>
    </DefinitionProduits>
  );
}

export default App
