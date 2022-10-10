import {Categoria} from "../model/Categoria"
import { ICategoriaRepositorio, ICreateCategoriaDTO } from "./ICategoriaRepositorio"


class CategoriaRepositorio implements ICategoriaRepositorio{

    private categorias: Categoria[]
    constructor(){
        this.categorias = []
    }

    create( {name, descricao}: ICreateCategoriaDTO ): void {
        const categoria = new Categoria()
        Object.assign(categoria,{
            name, 
            descricao, 
            dataCriacao: new Date()
        })
        this.categorias.push( categoria )
    }

    list(): Categoria[] {
        return this.categorias
    }
    // findByName(name: string): Categoria 
    findByName(name: string): Categoria | undefined {
        const categoria = this.categorias.find((categoria) => categoria.name === name)
        return categoria
    }
}
export { CategoriaRepositorio } 