'''
Você tem n sementes de flores. Cada semente deve ser plantada antes de começar a crescer e depois florescer. Plantar uma semente leva tempo, assim como o crescimento de uma semente. Você recebe dois arrays inteiros indexados por plantTime e growTime, de comprimento n cada:

plantTime[i] é o número de dias completos que você leva para plantar a semente. Todos os dias, você pode trabalhar no plantio de exatamente uma semente. Você não precisa trabalhar para plantar a mesma semente em dias consecutivos, mas o plantio de uma semente não está completo até que você tenha trabalhado n dias para plantá-la.
growTime[i] é o número de dias completos que a semente leva para crescer depois de totalmente plantada.Após o último dia de crescimento, a flor desabrocha e permanece desabrochada para sempre.
Desde o início do dia 0, você pode plantar as sementes em qualquer ordem.

Retorne o menor número de dias possível para todas as sementes estarem desabrochadas.

Exemplo:
Entrada: plantTime = [1,4,3], growTime = [2,3,1]
Saída: 9
Explicação: 
No dia 0, plante a 1ª semente. A semente cresce por 2 dias completos e floresce no dia 3.
Nos dias 1, 2, 3 e 4, plante a 2ª semente . A semente cresce por 3 dias completos e floresce no dia 8.
Nos dias 5, 6 e 7, plante a 3ª semente. A semente cresce por 1 dia inteiro e floresce no dia 9.
Assim, no dia 9, todas as sementes estão florescidas.

https://leetcode.com/problems/earliest-possible-day-of-full-bloom/
'''

class Solution(object):
    def earliest_full_bloom(plantTime, growTime):
        day_today = 0
        days_all_bloom = 0
        time_plant_grow = zip(growTime, plantTime)
        time_plant_grow = sorted(time_plant_grow, reverse=True) 
        for time_grow, time_plant in time_plant_grow:
            days_all_bloom = max(days_all_bloom, (day_today + time_plant + time_grow))
            day_today += time_plant
        return days_all_bloom
    print(earliest_full_bloom([1,4,3], [2,3,1]))