'''
Dado uma lista de inteiros (nums), encontre o número que não se repete.

Exemplo:

Entrada: nums = [2,2,1]
Saída: 1
'''

class Solution(object):
    def singleNumber(nums):
        diff = nums[0]
        for i in range (1, len(nums)): 
            diff ^= nums[i]
        return diff
    print(singleNumber([1,1,2,2,3]))
