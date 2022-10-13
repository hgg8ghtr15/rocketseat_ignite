import { v4 as uuidV4 } from "uuid"

class Usuario {

    id?: string;
    nome : string;
    admin: boolean;
    email : string;
    dataCriacao: Date;
    dataUpdate?: Date

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }
}

export { Usuario }