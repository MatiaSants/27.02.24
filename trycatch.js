// declara uma constante chamada variavel1 com o valor "valor somente leitura"
const variavell = "valor somente leitura";

// declara uma variavel chamada variavel2 com o valor "valor editavel"
var variavel2 = "valor editavel";

//try é utilizado para envolver código que pode gerar exceções
try {

    //Variável é o nome utilizado para definir um ou mais valores que são manipulados pelos programas durante a sua operação.
    variavell = "valor não permitido";

    //Imprime o texto no Console como uma mensagem de log
    console.log("A variavell foi alterada para: ", variavell);

    // se ocorrer um exceçao dentro do bloco try,o controle sera transferido para o bloco catch,e a mensagem de erro sera exibido no console
} catch (e) {
     console.error("Ops! Ocorreu o erro", e);
}

//try é utilizado para envolver código que pode gerar exceções
try{


//Variável é o nome utilizado para definir um ou mais valores que são manipulados pelos programas durante a sua operação
    variavel2 = "valor permitido";

     //Imprime o texto no Console como uma mensagem de log
    console.log("A variavel2 foi alterada para ", variavel2);

    // se ocorrer um exceçao dentro do bloco try,o controle sera transferido para o bloco catch,e a mensagem de erro sera exibido no console
} catch (e){
    console.error("Ops! Ocorreu o erro", e)
}