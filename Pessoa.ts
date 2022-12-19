
export class Pessoa {
   
    private _nome: String;
    private _cpf: Number;
    private _telefone: Number;

    public get nome(): String {
        return this._nome;
    }
    public set nome(value: String) {
        this._nome = value;
    }

    public get cpf(): Number {
        return this._cpf;
    }
    public set cpf(value: Number) {
        this._cpf = value;
    }

    public get telefone(): Number {
        return this._telefone;
    }
    public set telefone(value: Number) {
        this._telefone = value;
    }

}