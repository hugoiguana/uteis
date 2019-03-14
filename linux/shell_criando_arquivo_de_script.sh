#!/bin/bash
# Este é um arquivo de script do shell
cd
ls -l
echo -n "O usuário logado é : " 
whoami

#OBS1: O -n no comando echo possibilita executar o comando whoami na mesma linha que do comando echo.

#Instruçes:
#1 - A primeira linha do arquivo(!/bin/bash) indica o caminho do bash que será utilizado.
#2 - Após criar o arquivo é preciso dar permissão ao mesmo através do comando abaixo:
# [chmod a+x shell_criando_arquivo_de_script.sh] ou [chmod 755 shell_criando_arquivo_de_script.sh]
#3 - Após dar permissão de execução ao script, é preciso executá-lo, que pode ser feito de três formas diferentes:
#3.1 - Executando com o caminho completo:
# [./shell_criando_arquivo_de_script.sh]
# O .(ponto) significa, está no diretório atual;
# A /(barra) significa, está dentro do diretório;
#3.2 - Adicionando o caminho desse arquivo a variável PATH:
#3.3 - Adicionado esse arquivo a algum diretório indicado na variável PATH
#
#
#
#
#
#
#
#

