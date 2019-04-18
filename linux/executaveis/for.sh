#!/bin/bash
echo -------------------------------------------------
echo 'Exemplo 1 - Iterando com For em um array declarado no próprio For:'
for valor in pastel pizza esfiha 'pão de queijo'
do
 echo Adoro $valor
done
echo --------------------------------------------------
echo 'Exemplo 2 - Iterando com For nas linhas de um arquivo:'
IFSOLD=$IFS
IFS=$'\n'
arquivo='arquito_teste.txt'
for linha in `cat $arquivo`
do
 echo "Conteúdo da linha = $linha"
done
IFS=$IFSOLD
echo --------------------------------------------------
echo 'Exemplo 3 - Iterando com For por todos os itens de um diretório:'
for item in ../*
do
 if [ -d "$item" ]
 then
  echo "O item $item é um diretório"
 elif [ -f "$item" ]
 then
  echo "O item $item é um arquivo"
 fi
done
echo ------------------------------------------------ 

