
/**
 * nome - string
 * duratcao - number
 * educador - string
 */

interface Curso {
    nome: string, 
    duratcao?: number, 
    educador: string
}

class CriaCursoServico {

    execute( {nome = "Fabio",duratcao, educador}:Curso){
        console.log(nome,duratcao, educador)
    }
}

export default new CriaCursoServico