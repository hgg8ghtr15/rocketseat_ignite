import { v4 as uuidV4}  from 'uuid'

class Categoria {

    id?: string;
    name!: string;
    descricao!: string;
    dataCriacao!: Date;

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }
}

export {Categoria}