/*
Você recebe uma matriz de inteiros positivos.
Você deve pegar cada número inteiro na matriz, inverter seus dígitos e adicioná-los ao final da matriz.
Retorne o número de inteiros distintos na matriz final.

Exemplo:

Entrada: nums = [1,13,10,12,31]
Saída: 6
Explicação: Depois de incluir o reverso de cada número, a matriz resultante é [1,13,10,12,31,1,31,1,21,13].
Observe que para o inteiro 10, após invertê-lo, ele se torna 01, que é o mesmo que 1.
O número de inteiros distintos nesta matriz é 6 (sendo eles 1, 10, 12, 13, 21 e 31).

https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/submissions/876980220/
*/

const countDistinctIntegers = function(nums) {
    let reverseList = []
    for (num of nums){
        let revert = num.toString().split('').reverse().join('')
        reverseList.push(Number(revert))
    }
    let newList = nums.concat(reverseList)
    return [...new Set(newList)].length
};
console.log(countDistinctIntegers([1,13,10,12,31]))
