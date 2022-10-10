import { IEspecificacaoRepositorio} from '../../repositories/IEspecificacaoRepositorio'
import { Especificacao } from '../../model/Especificacao'

class ListarEspecificacaoUseCase {

    constructor( private especificacaoRepositorio: IEspecificacaoRepositorio ){}

    execute(): Especificacao[]{
        const especificacao = this.especificacaoRepositorio.listar()
        return especificacao
    }

}

export { ListarEspecificacaoUseCase }