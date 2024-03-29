## General commands:

```
[ls -a] (Lista arquivos e pastas ocultas)
[ls -l]
[ls -la]
[ls | grep "palavra"] (Lista arquivos e pastas filtrados por palavra)
[pwd]   (Exibe o path do diretoriorio atual)
[whoami] (Exibe o nome do usuário logado)
[$USER] (Exibe o nome do usuário logado)
[cd ~]  (Diretório do usuário)
[cd]    (Diretório do usuário)
[cd /]  (Diretório raiz)
[cd /home] (Diretório com todos os usuários)
[man mv] (Exibe opções para o comando)

uname -m (Versão do SO. 32 ou 64 bits)
sudo kill -9 $(sudo lsof -t -i:8080) (Mata porta em uso)
sudo su
sh arquivo.sh
route -n
ping (IP)
cat /etc/os-release (Verificar distribuição do linux)
uname -m
arch
 ``` 

## Disk Size
```
df -h (Exibe partições e espaços em disco)
du -sh /var
du -shc *
``` 
 

## Hardware Informations:
```
sudo lshw -short
sudo lshw
```


## Host file:
```
sudo gedit ~/etc/host  
```

---------------------------Manipulando Arquivos------------------------------
# Cria um arquivo vazio:
  [touch teste.txt] 
# Caso o arquivo exista, altera a data de criação indicando que houve alguma alteração:
  [touch teste.txt] 
# Redireciona a saída do texto para o arquivo 'teste.txt' sobrescrevendo todo o conteúdo:
  [echo "Hugo iguana" > teste.txt]
# Redireciona a saída do texto para o arquivo 'teste.txt' no final da linha:
  [echo "Aline Lucia" >> teste.txt] 
# Redireciona o arquvo "bash.bashrc", como entrada, para o comando wc, que exibe informações como linhas, palavras e tamanho      em bits do arquivo:
  [wc < /etc/bash.bashrc]
# Redirecionamento de entrada Inline:
  [wc << IGUANA]
  > Após escrever o comando acima, um subprompt será exibido onde estamos escrevendo essa linha até que a tag seja fechada 
  > Isso é um redirecionamento de entrada Inline;
  > Posso escrever quantas frases quiser;
  > Ao final, fecho com a tag 'IGUANA' que escolhi;
  > IGUANA

# Abre um arquivo com o editor de texto padrão:
$ gedit teste.txt
$ nano teste.txt
$ vim teste.txt

# Util para acompanhar arquivos de logs:
$ tail -f teste.log

# Exibe todas as linhas de um arquivo:
  [cat teste.txt] 
# Exibe todas as linhas dos arquivos terminados em .txt:
  [cat *.txt]     
# Exibe linhas dos arquivos que possuem um carctere qualquer no lugar de ?
  [cat teste?.txt]
# Exibe linhas de um arquivo filtradas por uma palavra:
  [cat teste.txt | grep palavra] 
# Exibe primeiras linhas de um arquivo que caibam no console e com opção de teclar enter para rolar as linhas:
  [cat teste.txt | more]
  [cat teste.txt | less]
# Redireciona o resultado das linhas filtradas com a palavra 'hugo' no arquivo 'teste1.txt' para o arquivo 'teste2.txt':
  [echo | cat teste1.txt | grep 'hugo' >> teste2.txt] 
# copia conteúdo do arquivo1 para o arquivo2 sobrescrevendo todo o conteúdo:
  [cp  arquivo1.txt arquivo2.txt]
# move arquivo:
  [mv arquivo.txt pasta1]       
# Renomeia o arquivo:
  [mv arquivo.txt arquivo3.txt] 
# Deleta arquivo
  [rm pasta/teste.txt] 
# Deleta todos os arquivos que començam com 'tes':
  [rm pasta/tes*])
# Deleta todos os arquivos que tem um caractere qualquer no ?
  [rm pasta/teste?] 

# Manipulando Arquivos com o VI:
  [vi arquivo.txt]  (Abre arquivo)
  * Comandos em modo de visualização:
  [i] (Entra no modo de edição na posição atual do cursor)
  [a] (Entra no modo de edição na posição seguinte do cursor)
  [A] (Entra no modo de edição na última posição da linha do cursor)
  [x] (Apaga um caractere da posição atual.)
  [6 x] (Apaga 6 caracteres a partir posição atual.)
  [dd] (Exclui a linha ao qual o cursor está posicionado)
  [yy] (Copia linha a qual o cursor está posicionado)
  [3 yy] (Copia 3 linhas a partir da posição a qual o cursor está posicionado)
  [p] (Cola a linha copiada abaixo da posição a qual o cursor está posicionado)
  [10 p] (Cola a linha copiada abaixo da posição a qual o cursor está posicionado 10 vezes)
  [10 dd] (Exclui 10 linhas da posição do cursor para abaixo)
  [$] (Move o cursor para o final da linha no qual o cursor está posicionado)
  [0] (Move o cursor para o inicio da linha no qual o cursor está posicionado)
  [G] (Move o cursor para a última linha do arquivo)
  [1 G] (Move o cursor para a primeira linha do arquivo)
  [: w] (Salva arquivo)
  [: q] (Sai do arquivo apenas quando não há alteração)
  [: q!] (Sai do arquivo sem salvar, mesmo que tenha alteração)
  [: wq] (Salva o arquivo e sai)
  * Pesquisando no arquivo:
  [/] (Posibilita digitar uma expresssão a ser pesquisada. Case Sensitive. Digite Enter para pesquisar)
  [n] (Vai para a próxima espressão encontrada na pesquisa)
  [N] (Vai para a espressão anterior encontrada na pesquisa)
  * Comandos em modo de edição:
  [ESC] (Sai do modo de edição)


# Manipulando pastas:
  [nautilus .]  Abre a pasta do caminho atual.
  [nautilus pasta] Abre a pasta selecionada.
  [ls pasta]
  [mkdir pasta]   (Cria pasra)
  [rmdir pasta]   (Deleta pastas vazias)
  [rm -r teste/]  (Deleta pasta mesmo que tenha conteúdo)
  [cp -r pasta1 pasta2] (Copia uma pasta para outra pasta)


# Localizando arquivos/pastas:
  [updatedb] 
  [locate Classe.java] (imprime o caminho/path de um arquivo. OBS: Executar antes comando [updatedb])
  [find . -iname '*foo*'] (Encontra arquivos na pasta atual com opção case insensitively)
  [find . -cmin -5] (Encontra arquivos na pasta atual alterados nos últimos 5 minutos) 
  [find . -ctime -7] (Encontra arquivos na pasta atual alterados nos últimos 7 dias)
  [grep -r "palavra" *] (Exibe nome dos arquivos e linhas com o texto encontrado em qualquer pasta e subpastas.)
  [grep -r "palavra" diretorio/*]
  [grep -i "palavra" diretorio/*] (Case insensitive)
  [grep -v "palavra" diretorio/*] (Busca as linhas onde não apareça a palavra)
  [grep -riv "palavra" diretorio/*]]
  [grep -iv "palavra" arquivo.txt | less]
  [grep -iv "palavra" arquivo.txt >> hugo.txt] (Cria o arquivo hugo.txt com o resultado da busca)

## Compactação ZIP:
```
  zip -r zipado.zip assistidos/ (Zipa)
  unzip -l zipado.zip (Olha conteúdo)
  unzip zipado.zip (Unzipa)
  zip -rq zipado.zip assistidos/ (Zipa sem cuspir informação)
  unzip -q zipado.zip (Unzipa sem cuspir informação) 
```

## Compactação TAR/GZ:
```
  https://phoenixnap.com/kb/extract-tar-gz-files-linux-command-line
  tar -cz pasta > pasta_zipada.tag.gz (Compacta)
  tar -xz < pasta_zipada.tag.gz (Descompacta)
  tar -czf pasta_zipada.tag.gz pasta (Compacta)
  tar -xzf pasta_zipada.tag.gz (Descompacta)
  tar -vczf pasta_zipada.tag.gz pasta (Compacta e exibe informação)
  tar -vxzf pasta_zipada.tag.gz (Descompacta e exibe informação)
  tar -tzf pasta_zipada.tag.gz (Monstra coteúdo da pasta zipada)
```

## Gerenciando processos:
```
  ps (Exibe processos em execução do bash atual)
  ps -e (Exibe processos em execução) 
  ps -ef (Exibe processos em execução com mais informação) 
  ps -ef | grep chroome] (Exibe processos em execução com mais informação filtrado por uma palavra) 
  ps -ef | grep top] (Exibe processos top sendo executados)
  top (Exibe processos com info. de consumo de memória e processamento ordernados por processamento)
  pstree
  kill 1020 (Mata o processo com o código do PID 1020, dando uma chance de recuperação ao programa) 
  kill -9 1020 (Mata o processo com o código do PID 1020, sem chance de recuperação ao programa)
  killall firefox (Mata todos os processo com nome firefox, dando uma chance de recuperação ao programa) 
  killall firefox (Mata todos os processo com nome firefox, sem chance de recuperação ao programa)
```


## Aliases:
```
alias (Exibe todos os alias locais criados no sistema e no shell)
alias hot = 'nautilus .' (Cria um aliases)
unalias hot (Deleta um aliases)
```


# Install files:
- Deb files:
[sudo dpkg -i code_1.40.2-1574694120_amd64.deb]


## History command
```
echo HISTSIZE
~/.bash_history
history
history 1
history 1 | grep git
```

## Firewall:
```
systemctl status ufw
sudo ufw status
ufw enable
ufw allow ssh
ufw allow http/tcp
ufw allow 80
ufw status numbered
ufw delete 1
```


## IP information:
```
ifconfig
ip a
ip addr show
ip addr add 192.168.1.10/24 dev eth0
```

## SSH:
```
service sshd status
service sshd start
ssh root@IP_REMOTE_MACHINE -p 22
ssh ubuntu@IP_REMOTE_MACHINE -p 22 -i ~/.ssh/id_rsa
scp /LOCAL_PATH/file.txt ubuntu@IP-REMOTE_MACHINE:/home/ubuntu/
scp -r /LOCAL_PATH/ ubuntu@IP_REMOTE_MACHINE:/home/ubuntu/
scp -r ubuntu@IP_REMOTE_MACHINE:/home/ubuntu/ /LOCAL_PATH/
```

## Create a key pem and config it on a remote machine to access via SSH:
```
ssh-keygen -b 4096 -C "hugo.iguanaa@gmail.com"
scp ~/.ssh/id_rsa.pub ubuntu@IP_REMOTE_MACHINE:/home/ubuntu/
ssh ubuntu@IP_REMOTE_MACHINE -p 22 -i ~/.ssh/id_rsa
cat /home/ubuntu/id_rsa.pub >> ~/.ssh/authorized_key
exit
ssh ubuntu@IP_REMOTE_MACHINE -p 22 -i ~/.ssh/id_rsa
```
