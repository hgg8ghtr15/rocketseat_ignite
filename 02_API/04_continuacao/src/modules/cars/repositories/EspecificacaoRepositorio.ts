import {IEspecificacaoRepositoio, IEspecificacaoRepositorioDTO} from './IEspecificacaoRepositorio'
import { Especificacao } from '../model/Especificacao'

class EspecificacaoRepositorio implements IEspecificacaoRepositoio {
    
    private especificacoes: Especificacao[];

    constructor(){
        this.especificacoes = []
    }
    

    create({ name, descricao }: IEspecificacaoRepositorioDTO): void {
        const especificacao = new Especificacao()

        Object.assign(especificacao, { 
            name, 
            descricao,
            dataCriacao: new Date()
        })

        this.especificacoes.push(especificacao)
    }

    findByName(name: string): Especificacao | undefined{
        const especificacao = this.especificacoes.find((especificacao) => especificacao.name === name)
        return especificacao
    }
}

export { EspecificacaoRepositorio }