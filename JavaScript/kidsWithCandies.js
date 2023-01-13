/*
Você recebe uma lista de doces, onde cada item da lista representa o número de doces que uma criança tem, e o número de doces extras que você possui.
Retorne uma lista de booleanos, onde após dar a uma criança os doces extras, informe se ela teria o maior número de doces entre todas ou não.
Note que várias crianças podem ter o maior número de doces.

Exemplo:

Entrada: doces = [2,3,5,1,3], docesExtras = 3
Saída: [true,true,true,false,true]
Explicação: Se você der todos os doceExtras para:
- Criança 1, terão 2 + 3 = 5 bombons, que é o maior entre as crianças.
- Criança 2, terão 3 + 3 = 6 bombons, que é o maior entre as crianças.
- Criança 3, terão 5 + 3 = 8 bombons, que é o maior entre as crianças.
- Criança 4, terão 1 + 3 = 4 bombons, o que não é o maior entre as crianças.
- Criança 5, terão 3 + 3 = 6 bombons, que é o maior entre as crianças.

https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/
*/

const kidsWithCandies = function(candies, extraCandies) {
    let count = []
    let maxCandies = Math.max.apply(0, candies)
    for (candy of candies) {
        let totalCandies = candy + extraCandies
        if (totalCandies >= maxCandies) {
            count.push(true)
        } else {
            count.push(false)
        }
    }
    return count
};
console.log(kidsWithCandies([2,3,5,1,3], 3))
