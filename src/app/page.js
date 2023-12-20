import Navbar from './nav-bar-vertical';
import { RedNeuronal } from './red-neuronal';

export default function Home() {
  return (
    <main className='z-1'>

      {/* Resto del contenido */}
      <Navbar/>
      {/* Contenido de RedNeuronal como fondo */}
      <RedNeuronal />
    </main>
  );
}
