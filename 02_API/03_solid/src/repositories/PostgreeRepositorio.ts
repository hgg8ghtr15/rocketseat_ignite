import { Categoria } from '../model/Categoria'
import {ICategoriaRepositorio, ICreateCategoriaDTO} from './ICategoriaRepositorio'

class PostgreeRepositorio implements ICategoriaRepositorio{
    findByName(name: string): Categoria {
        // throw new Error('Method not implemented.')
        console.log(name)
        return null
    }
    list(): Categoria[] {
        return null
        // throw new Error('Method not implemented.')
    }
    create({name, descricao}: Categoria): void {
        console.log(name, descricao)
        // throw new Error('Method not implemented.')
    }

}

export {PostgreeRepositorio}