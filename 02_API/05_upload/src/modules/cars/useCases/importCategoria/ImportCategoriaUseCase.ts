import sf from 'fs'
import { parse } from 'csv-parse'

import { CategoriaRepositorio } from '../../repositories/implementations/categoriaRepositorio'

interface IImportCategoria{
    name: string;
    descricao: string;
}

class ImportCategoriaUseCase {

    constructor(private categoriaRepositorio: CategoriaRepositorio){}


    carregarArquivo(file: Express.Multer.File): IImportCategoria[]{
        const stream = sf.createReadStream(file.path)
        
        const categorias :IImportCategoria[] = []
        
        const parseArquivo = parse()
        stream.pipe(parseArquivo)
        parseArquivo.on("data", async ( line ) => {
            const [name, descricao] = line
            const categoria = {
                name,
                descricao
            }
            categorias.push(categoria)
        })
        console.log(categorias.length)
        return categorias
    }

    execute(file: Express.Multer.File):void{
        const categiria = this.carregarArquivo(file)
    }
}

export { ImportCategoriaUseCase }