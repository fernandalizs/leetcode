/*
Dado uma lista com n números, retorne a maior diferença entre dois números consecutivos em ordem crescente, se a lista possuir menos de dois elementos retorne 0.

Exemplo:

Entrada: nums = [3,6,9,1]
Saída: 3
Explicação: A forma ordenada da matriz é [1,3,6,9], logo (3,6) ou (6,9) tem a diferença máxima = 3.

https://leetcode.com/problems/maximum-gap/
*/

const maximumGap = function(nums) {
    let gapList = []
    let numbers = nums.sort((a,b) => a-b)
    if (nums.length < 2){
        return 0
    } else {
        for (var i = 0; i < (numbers.length); i++){
            if (numbers[i+1]){
                let numGap = numbers[i+1] - numbers[i]
                gapList.push(numGap)
            }
        }
        return Math.max.apply(0, gapList)
    }
};
console.log(maximumGap([1,3,100]))
