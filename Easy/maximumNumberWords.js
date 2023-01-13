/*
Uma frase é uma lista de palavras separadas por um único espaço, sem espaços iniciais ou finais.
Você recebe uma lista de frases, onde cada string representa uma única frase.
Retorne o número máximo de palavras que aparecem em uma única frase.

Exemplo:

Entrada: sentences = ["alice e bob amam programar", "eu também acho", "uau isso é ótimo muito obrigado"]
Saída: 6
Explicação: 
- A primeira frase, "alice e bob amam programar", tem 5 palavras no total.
- A segunda frase, "eu também acho", tem 4 palavras no total.
- A terceira frase, "uau isso é ótimo muito obrigado", tem 6 palavras no total.
Assim, o número máximo de palavras em uma única frase vem da terceira frase, que possui 6 palavras.

https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
*/

const mostWordsFound = function(sentences) {
    let count = 0
    for (sentence of sentences){
        let lists = sentence.split(" ")
        count = Math.max(count, lists.length)
    }
    return count
};
console.log(mostWordsFound(["alice e bob amam programar", "eu também acho", "uau isso é ótimo muito obrigado"]))
