import {Categoria} from '../model/Categoria'

interface ICreateCategoriaDTO {
    name: string, 
    descricao: string
}

interface ICategoriaRepositorio{
    findByName(name:string): Categoria| undefined;
    list(): Categoria [];
    create({name, descricao}:ICreateCategoriaDTO):void;
}

export { ICategoriaRepositorio, ICreateCategoriaDTO }