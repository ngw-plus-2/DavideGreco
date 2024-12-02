// Classe Veicolo
class Veicolo {
    private targa: string; // Targa immutabile
  
    constructor(
      public marca: string,
      public modello: string,
      public velocitaMassima: number,
      targa: string
    ) {
      this.targa = targa;
    }
  
    // Metodo descrizione
    descrizione(): string {
      return `Marca: ${this.marca}, Modello: ${this.modello}, Velocità Massima: ${this.velocitaMassima} km/h`;
    }
  }
  
  // Classe Auto che estende Veicolo
  class Auto extends Veicolo {
    constructor(
      marca: string,
      modello: string,
      velocitaMassima: number,
      targa: string,
      public numeroPorte: number
    ) {
      super(marca, modello, velocitaMassima, targa);
    }
  
    // Metodo descriviAuto
    descriviAuto(): string {
      return `${this.descrizione()}, Numero di Porte: ${this.numeroPorte}`;
    }
  }
  
  // Test delle classi
  const veicolo = new Veicolo("Fiat", "Punto", 180, "AB123CD");
  console.log(veicolo.descrizione());
  
  const auto = new Auto("Toyota", "Corolla", 200, "XY456ZT", 4);
  console.log(auto.descriviAuto());