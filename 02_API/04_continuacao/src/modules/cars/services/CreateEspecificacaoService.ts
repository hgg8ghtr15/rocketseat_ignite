import {IEspecificacaoRepositoio} from '../repositories/IEspecificacaoRepositorio'

interface IRequest{
    name: string;
    descricao: string;
}

class CreateEspecificacaoService {
    constructor(private especificaoRepositorio : IEspecificacaoRepositoio ){

    }
    execute({name, descricao}:IRequest): void{
        const especificacaoExiste = this.especificaoRepositorio.findByName(name)

        if(especificacaoExiste){
           throw new Error("Esta Especificacao já existe") 
        }

        this.especificaoRepositorio.create({
            name, 
            descricao
        });
    }
}

export {CreateEspecificacaoService}