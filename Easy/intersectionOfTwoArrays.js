/* 
Dado duas listas nums1 e nums2, retorne um array de sua interseção. Cada elemento no resultado deve ser único e você pode retornar o resultado em qualquer ordem.

Exemplo:

Entrada: nums1 = [1,2,2,1], nums2 = [2,2]
Saída: [2]

https://leetcode.com/problems/intersection-of-two-arrays/submissions/876167703/
*/

const intersection = function(nums1, nums2) {
    let list1 = new Set(nums1)
    let list2 = new Set(nums2)
    let newList = []
    for (let number of list1){
        if (list2.has(number)){
            newList.push(number)
        }
    }
    return newList
};
let nums1 = [1,2,3,3]
let nums2 = [2,3,4]
console.log(intersection(nums1, nums2))
