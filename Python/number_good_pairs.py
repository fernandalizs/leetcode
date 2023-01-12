'''
Dado uma lista de inteiros, retorne a quantidade de pares iguais.

Exemplo:

Entrada: nums = [1,2,3,1,1,3]
Saída: 4
Explicação: Existem 4 pares iguais (0,3), (0,4), (3,4), (2,5).

https://leetcode.com/problems/number-of-good-pairs/
'''

class Solution:
    def num_identical_pairs(nums):
        count_numbers = {}
        pairs = 0
        for num in nums:
            if num in count_numbers:
                pairs += count_numbers[num]
                count_numbers[num] += 1
            else:
                count_numbers[num] = 1
        return pairs
    print(num_identical_pairs([1,2,3,1,1,3]))
