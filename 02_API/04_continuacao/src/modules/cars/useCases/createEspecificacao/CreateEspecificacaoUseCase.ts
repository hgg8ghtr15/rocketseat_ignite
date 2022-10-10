import { IEspecificacaoRepositorio} from "../../repositories/IEspecificacaoRepositorio"


interface IRequest {
   name: string;
   descricao: string; 
}

class CreateEspecificacaoUseCase {

    constructor( private especificacaoRepositorio: IEspecificacaoRepositorio){}

    execute({name, descricao}:IRequest): void{
        const especificacaoExiste = this.especificacaoRepositorio.findByName(name)

        if(especificacaoExiste){
            throw new Error("Especificacao ja existe.")
        }

        this.especificacaoRepositorio.create({name, descricao})
    }

}

export { CreateEspecificacaoUseCase }