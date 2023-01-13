'''
Dado uma string de n dígitos, retorne o número de possíveis combinações de letras que você pode fazer utilizando os caracteres desta string.

Exemplo:

Entrada: tiles = "AAB"
Saída: 8
Explicação: As sequências possíveis são "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".

https://leetcode.com/problems/letter-tile-possibilities/description/
'''

import itertools

class Solution(object):
    def num_tile_possibilities(tiles):
        letters_list = []
        sequences = []
        for letter in tiles:
            letters_list.append(letter)
        for item in range(0, len(letters_list)+1):
            for sequence in itertools.permutations(letters_list, item):
                sequences.append(sequence)
        return(len(set(sequences)) - 1)
    print(num_tile_possibilities("ABB"))
