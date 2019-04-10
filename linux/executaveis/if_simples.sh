#!/bin/bash
# Exemplo de IF simples em um script

if cd / 
then 
 echo "Diretório raiz encontrado"
fi

if [ -e $JAVA_HOME ]; then
echo "Diretório($JAVA_HOME) java encontrado"
fi


