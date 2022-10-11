import {Especificacao} from '../model/Especificacao'

interface IEspecificacaoRepositorioDTO {
    name: string;
    descricao: string;
}

interface IEspecificacaoRepositorio{
    create({name, descricao}:IEspecificacaoRepositorioDTO): void
    findByName(name:string): Especificacao| undefined;
    listar():Especificacao []
}

export { IEspecificacaoRepositorio, IEspecificacaoRepositorioDTO }