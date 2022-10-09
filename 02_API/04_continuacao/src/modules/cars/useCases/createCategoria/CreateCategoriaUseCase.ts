import { CategoriaRepositorio } from '../../repositories/categoriaRepositorio'
import { ICategoriaRepositorio} from '../../repositories/ICategoriaRepositorio'


interface IRequest{
    name: string;
    descricao: string;
}

/**
 * [x] tipo de retorno
 * [x] retono de erro
 * [x] acessar repositorio
 * [x] retornar algo
 */
class CreateCategoriaUseCase {

    constructor( private categoriaRepositorio: ICategoriaRepositorio ){
    }

    execute({ name, descricao }:IRequest): void {
        const categoriaExiste = this.categoriaRepositorio.findByName(name)

        if (categoriaExiste) {
            throw new Error("Categoria ja existe"); 
        }

        this.categoriaRepositorio.create({name, descricao})
    }
}

export {CreateCategoriaUseCase}