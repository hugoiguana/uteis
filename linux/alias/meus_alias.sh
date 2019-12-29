#!/bin/bash

# Validar se parâmetro foi informado:

if [ $# -le 0 ] 
then
 echo "Error: Informe o nome do usuário da máquina como parâmetro."
 echo "O usuário autal é: $USER"
else
 echo "Ok"
 echo $1/.bashrc
 arquivo_alias="/$1/.bashrc"

 if [[ -f $arquivo_alias ]]; then
   #. ~/.bashrc
   echo "Existe"
 else
  echo "Arquivo $arquivo_alias não existe. O mesmo será criado para armazenar os alias."
  touch $arquivo_alias
 fi 

 echo "Alias criados com sucesso no arquivo "
fi
