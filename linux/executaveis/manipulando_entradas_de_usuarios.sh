 #!/bin/bash

# Há algumas formas de se obter dados dos usuários no shell, como 
#  parâmetros de linha de comando, opções e leitura de dados diretamente
#  do teclado.

# Parâmetros de linha de comando:
#  É o método para passar dados ao script do shell. 
#  Permite adicionar valores de dados à linha de comandos ao executar 
#  o script. Para passar parâmetros a um script, digite-os após o nome
#  do script ao executá-lo:
#  ./script.sh param1 param2 param3

# Leitura dos parâmetros:
#  O shell bash atribui variáveis especiais, denominadas parâmetros 
#  posicionais, a todos os parâmetros digitados na linha de comandos.
#  Os parâmetros posicionais são números, sendo $0 o nome do programa
#  ,$1 o primeiro parâmetros, $2 o segundo, e assim por diante
#  até o $9.
#  Para adicionar mais parâmetros, englobe o nº do parâmetro 
#  entre aspas, EX: 
#  $(10)

echo ------------------------------------------------------------------
echo "Calcula a multiplicação de dois números:"
x=$[ $1 * $2 ]
echo "$1 x $2 = $x"

# OBS: Para executar esse script chame da seguinte forma:
# ./manipulando_entradas_de_usuarios.sh 2 5

echo  -------------------------------------------------------------------
