#!/bin/bash

# Comparações de arquivos com test

# Comparação         Descrição
#  [ -d arquivo ]        Arquivo existe e é um diretório
#  [ -e arquivo ]        Arquivo existe
#  [ -f arquivo ]         Arquivo existe e é um arquivo
#  [ -r arquivo ]         Arquivo existe e possui permissão de leitura para o usuário atual
#  [ -s arquivo ]        Arquivo existe e não está vazio
#  [ -w arquivo ]        Arquivo existe e tem permissão de escrita
#  [ -x arquivo ]         Arquivo existe e tem permissão de execução
#  [ -O arquivo ]        Arquivo existe e é propriedade do usuário atual
#  [ -G arquivo ]        Arquivo existe e seu grupo padrão é o mesmo do usuário atual
#  [ arq1 -nt arq2 ]     arq1 é mais novo que arq2
#  [ arq1 -ot arq2 ]     arq1 é mais antigo que arq2

if [ -d $HOME ]
then
  echo "Seu diretório home existe e o conteúdo é:"
  cd $HOME
  ls -l 
else
 echo "Diretório não encontrado"
fi

echo -----------------------------------------------

if [ -e $HOME ]
then
 echo "O objeto existe. Vamos ver se é um arquivo ou um diretório"

  if [ -f $HOME ]
  then
   echo "É um arquivo"
  else 
   echo "É um diretório"
  fi
else
  echo "Objeto não encontrado"
fi

echo -------------------------------------------------------------

arquivo=/etc/passwd

if [ -f $arquivo ]
then
 echo "Existe; testar se usuário tem permissão de leitura"
 if [ -r $arquivo ]
 then
   echo "Possui permissão de leitura; mostrando as 5 últimas linhas"

