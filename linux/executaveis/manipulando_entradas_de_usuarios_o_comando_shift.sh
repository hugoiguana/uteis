#!/bin/bash
echo -------------------------------------------------------
echo "O comando Shift"
# O comando shift:
#  Desloca os parâmetros em suas posições relativas.
#  Ao ser usado, o comando shift "rebaixa" cada parâmetro em uma posição
#  , de modo que o valor da variável $3 é movido para $2, o valor
# de $2 é movido para $1 e o valor de $1 é descartado.
# EX:
i=1
while [ -n "$1" ]
do
 echo "O parâmetro $i tem o valor: $1"
 i=$[$i+1]
 shift
done
echo ---------------------------------------------------------

