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
// Classe base Veicolo
var Veicolo = /** @class */ (function () {
    function Veicolo(marca, modello) {
        this.marca = marca;
        this.modello = modello;
    }
    Veicolo.prototype.descriviVeicolo = function () {
        return "Marca: ".concat(this.marca, ", Modello: ").concat(this.modello);
    };
    return Veicolo;
}());
// Classe Auto che estende Veicolo
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(marca, modello, numeroPorte) {
        var _this = _super.call(this, marca, modello) || this; // Chiama il costruttore della classe base
        _this.numeroPorte = numeroPorte;
        return _this;
    }
    Auto.prototype.descriviAuto = function () {
        return "".concat(this.descriviVeicolo(), ", Numero Porte: ").concat(this.numeroPorte);
    };
    return Auto;
}(Veicolo));
// Classe Moto che estende Veicolo
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, modello, tipoManubrio) {
        var _this = _super.call(this, marca, modello) || this; // Chiama il costruttore della classe base
        _this.tipoManubrio = tipoManubrio;
        return _this;
    }
    Moto.prototype.descriviMoto = function () {
        return "".concat(this.descriviVeicolo(), ", Tipo Manubrio: ").concat(this.tipoManubrio);
    };
    return Moto;
}(Veicolo));
// Creazione di un'istanza di Auto
var miaAuto = new Auto("Toyota", "Yaris", 5);
console.log(miaAuto.descriviAuto()); // Stampa la descrizione dell'auto
// Creazione di un'istanza di Moto
var miaMoto = new Moto("Yamaha", "MT-07", "Sportivo");
console.log(miaMoto.descriviMoto()); // Stampa la descrizione della moto
