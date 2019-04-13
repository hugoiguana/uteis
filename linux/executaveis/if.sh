#!/bin/bash
# Exemplo de IF simples em um script

if cd / 
then 
 echo "Diretório raiz encontrado"
fi

if [ -e $JAVA_HOME ]; then
echo "Diretório($JAVA_HOME) java encontrado"
fi
echo ----------------------------------------------

var1="hugoiguana"
var2="aline"

if ls /$var1
then
 echo "Diretório do usuário $var1 encontrado!"
elif ls /$var2
then
 echo "Diretório do usuário $var2 é que foi encontrado!"
else
 echo "Nenhum dos dois diretórios foram encontrados!"
fi

echo ----------------------------------------------
if [ $USER = hugoiguana ] && [ -w $HOME/.bashrc ]
then
  echo "O usuário $USER tem permissão para alterar o arquivo."
else
 echo "O usuário hugoiguana não pode alterar o arquivo agora"
fi
echo ----------------------------------------------
#----------------------------------------------
