#!/bin/bash
# Comparação numéricas com test e if-then
# O comando test pode avaliar três classes de condições:
# Comparações numéricas, de Strings e de arquivos.

# Uso em comparações numéricas:

# Comparação       # Descrição
# [ x -eq y ]       x é igual a y
# [ x -ge y ]       x é maior ou igual a y
# [ x -gt y ]       x é maior que y
# [ x -le y ]       x é menor ou igual a y
# [ x -lt y ]       x é menor que y
# [ x -ne y ]       x é diferente de y

# OBS: O comando Test não suporta aritmética de ponto flutuante.

# Exemplo:
x=10
y=15

if [ $x -gt 8 ]
then
 echo "$x maior que 8"
fi

if [ $x -eq $y ]
then
 echo "$x é igual a $y"
else
 echo "$x é diferente de $y"
fi

