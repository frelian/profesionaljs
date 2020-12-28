import Singleton from './Singleton';

// Voy a comprobar que singleton usa una sola instancia es comparar:
// Para obtener una instancia uso getInstance ya que el constructor es privado y 
// que el metodo publico es getInstance para poder obtener la instancia.
const a = Singleton.getInstance();
const b = Singleton.getInstance();

// Imprimo para comprobar si la referencia de a es igual a la b, imprimo para demostrar que Singleton usa una sola instancia
console.log("A es igual a B ?", a === b);