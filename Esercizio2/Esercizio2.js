var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Classe Veicolo
var Veicolo = /** @class */ (function () {
    function Veicolo(marca, modello, velocitaMassima, targa) {
        this.marca = marca;
        this.modello = modello;
        this.velocitaMassima = velocitaMassima;
        this.targa = targa;
    }
    // Metodo descrizione
    Veicolo.prototype.descrizione = function () {
        return "Marca: ".concat(this.marca, ", Modello: ").concat(this.modello, ", Velocit\u00E0 Massima: ").concat(this.velocitaMassima, " km/h");
    };
    return Veicolo;
}());
// Classe Auto che estende Veicolo
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(marca, modello, velocitaMassima, targa, numeroPorte) {
        var _this = _super.call(this, marca, modello, velocitaMassima, targa) || this;
        _this.numeroPorte = numeroPorte;
        return _this;
    }
    // Metodo descriviAuto
    Auto.prototype.descriviAuto = function () {
        return "".concat(this.descrizione(), ", Numero di Porte: ").concat(this.numeroPorte);
    };
    return Auto;
}(Veicolo));
// Test delle classi
var veicolo = new Veicolo("Fiat", "Punto", 180, "AB123CD");
console.log(veicolo.descrizione());
var auto = new Auto("Toyota", "Corolla", 200, "XY456ZT", 4);
console.log(auto.descriviAuto());
