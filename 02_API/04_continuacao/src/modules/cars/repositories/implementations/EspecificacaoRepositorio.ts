import {IEspecificacaoRepositorio, IEspecificacaoRepositorioDTO} from '../IEspecificacaoRepositorio'
import { Especificacao } from '../../model/Especificacao'

class EspecificacaoRepositorio implements IEspecificacaoRepositorio {
    
    private especificacoes: Especificacao[];

    private static INSTANCE:EspecificacaoRepositorio

    private constructor(){
        this.especificacoes = []
    }
    
    /**
     * Verificao se ela já existe!
     */
    public static getInstance():EspecificacaoRepositorio{
        if(!EspecificacaoRepositorio.INSTANCE){
            EspecificacaoRepositorio.INSTANCE = new EspecificacaoRepositorio()
        }
        return EspecificacaoRepositorio.INSTANCE
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

    listar():Especificacao[] {
        return this.especificacoes
    }
}

export { EspecificacaoRepositorio }