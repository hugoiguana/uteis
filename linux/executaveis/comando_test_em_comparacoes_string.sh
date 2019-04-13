#!/bin/bash

# Comparações de string com test

# Comparação    Descrição
# $x = $y            x é igual a y
# $x != $y           x é diferente de y
# $x < $y            x é menor  que y
# $x > $y            x é maior que y
# -n $x                x tem comprimento maior que zero
# -z = $x             x tem comprimento zero


x=hugo

if [ $x = 'hugo' ]
then 
 echo $x é igual a hugo
fi
