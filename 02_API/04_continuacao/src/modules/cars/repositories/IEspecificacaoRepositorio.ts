import {Especificacao} from '../model/Especificacao'

interface IEspecificacaoRepositorioDTO {
    name: string;
    descricao: string;
}

interface IEspecificacaoRepositoio{
    create({name, descricao}:IEspecificacaoRepositorioDTO): void
    findByName(name:string): Especificacao| undefined;
}

export { IEspecificacaoRepositoio, IEspecificacaoRepositorioDTO }