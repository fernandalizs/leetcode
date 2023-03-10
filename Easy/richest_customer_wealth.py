''' 
Você recebe uma lista de contas bancárias com a quantidade de dinheiro que os clientes tem no banco.
Retorne o valor que o cliente mais rico possui.
A riqueza de um cliente é a quantidade de dinheiro que ele tem em todas as suas contas bancárias somadas.

Exemplo:

Entrada: accounts = [[1,2,3],[3,3,1]]
Saída: 7
Explicação:
1 cliente possui = 1 + 2 + 3 = 6
2 cliente possui = 3 + 3 + 1 = 7
O cliente mais rico é o 2 com uma riqueza de 7, então retorne 7.

https://leetcode.com/problems/richest-customer-wealth/submissions/876279218/
'''

class Solution(object):
    def maximum_wealth(accounts):
        return max(sum(value) for value in accounts)
    print(maximum_wealth([[1,2],[5,4],[3,3]]))
