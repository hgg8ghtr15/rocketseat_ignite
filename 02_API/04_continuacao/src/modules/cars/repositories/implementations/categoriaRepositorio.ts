import {Categoria} from "../../model/Categoria"
import { ICategoriaRepositorio, ICreateCategoriaDTO } from "../ICategoriaRepositorio"


class CategoriaRepositorio implements ICategoriaRepositorio{

    private categorias: Categoria[]

    /**
     * Responsavel por deixala Privada
     */
    private static INSTANCE: CategoriaRepositorio

    /**
     * Construot da Categoria Arrays
     */
    private constructor(){
        this.categorias = []
    }

     /**
     * Responsavel por Criar a instancia
     */
    public static getInstance(): CategoriaRepositorio{
        if(!CategoriaRepositorio.INSTANCE){
            CategoriaRepositorio.INSTANCE = new CategoriaRepositorio()
        }
        return CategoriaRepositorio.INSTANCE
    }

    /**
     * Method Criar
     */
    create( {name, descricao}: ICreateCategoriaDTO ): void {
        const categoria = new Categoria()
        Object.assign(categoria,{
            name, 
            descricao, 
            dataCriacao: new Date()
        })
        this.categorias.push( categoria )
    }

    /**
     * Method Listar
     */
    list(): Categoria[] {
        return this.categorias
    }

     /**
     * Method pesquisar por nome
     * findByName(name: string): Categoria 
     */
    findByName(name: string): Categoria | undefined {
        const categoria = this.categorias.find((categoria) => categoria.name === name)
        return categoria
    }
}
export { CategoriaRepositorio } 