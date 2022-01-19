class Egreso extends Dato(){
    static contadorEgresos = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Egreso.contadorEgresos;
    }
    get id(){
        return this._id
    }
    set id(id){
        this._id = id;
    }
}