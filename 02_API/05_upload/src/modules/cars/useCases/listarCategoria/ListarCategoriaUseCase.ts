import { Categoria } from "../../model/Categoria";
import { ICategoriaRepositorio } from "../../repositories/ICategoriaRepositorio";

class ListarCategoriaUseCase {
    
    constructor( private categoriaRepositorio: ICategoriaRepositorio){}

    execute(): Categoria []{
        const categorias = this.categoriaRepositorio.list() 
        return categorias
    }


}

export { ListarCategoriaUseCase }