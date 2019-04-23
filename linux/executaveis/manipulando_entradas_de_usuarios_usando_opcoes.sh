#!/bin/bash
echo -------------------------------------------------------
echo "Trabalhando com opções de comandos:"
# Opções são letras precedidas por um húifen que alteram o comportamento de
# um comando.
# EX:

while [ -n "$1" ]
do
 case "$1" in
  1) echo "Opção selecionada: 1";;
  2) echo "Opção selecionada: 2";;
  -a) echo "Opção selecionada: A";;
  -*) echo "Opção incorreta";;
 esac
 shift
done
# OBS: Rode o comando conforme abaixo:
# ./manipulando_entradas_de_usuarios.sh 1
# ./manipulando_entradas_de_usuarios.sh 2
# ./manipulando_entradas_de_usuarios.sh -a
# ./manipulando_entradas_de_usuarios.sh -*
echo -------------------------------------------------------

