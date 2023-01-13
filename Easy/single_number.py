'''
Dado uma lista de inteiros (nums), encontre o número que não se repete.

Exemplo:

Entrada: nums = [2,2,1]
Saída: 1

https://leetcode.com/problems/single-number/
'''

class Solution(object):
    def single_number(nums):
        diff = nums[0]
        for i in range (1, len(nums)):
            diff ^= nums[i]
        return diff
    print(single_number([1,1,2,2,3]))
