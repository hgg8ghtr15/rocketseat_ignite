import fs from 'fs'
import { parse } from 'csv-parse'

import { CategoriaRepositorio } from '../../repositories/implementations/categoriaRepositorio'

interface IImportCategoria{
    name: string;
    descricao: string;
}

class ImportCategoriaUseCase {

    constructor(private categoriaRepositorio: CategoriaRepositorio){}


    carregarArquivo(file: Express.Multer.File):Promise<IImportCategoria[]>{
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path)
            
            const categorias :IImportCategoria[] = []
            
            const parseArquivo = parse()
            stream.pipe(parseArquivo)
            parseArquivo.on("data", async ( line ) => { // inicio
                const [name, descricao] = line
                categorias.push({
                    name, 
                    descricao
                })
            }).on("end", () => { // Terminana
                fs.promises.unlink(file.path) // remove o arquivo
                resolve(categorias);
            }).on("error", (err) => {
                reject(err)
            })
        })
    }

    async execute(file: Express.Multer.File):Promise<void>{
        const categirias = await this.carregarArquivo(file)

        categirias.map( async categoria => {
            const {name, descricao} = categoria
            const existeCategoria = this.categoriaRepositorio.findByName(name)

            if(!existeCategoria){
                this.categoriaRepositorio.create({name, descricao})
                console.log("Categoria Salva com sucesso")
            }
        })
    }
}

export { ImportCategoriaUseCase }