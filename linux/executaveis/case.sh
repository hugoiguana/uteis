#!/bin/bash

local=quarto

case $local in
 quarto)
  echo "Você está no quarto";;
 cozinha) 
  echo "Aqui é a cozinha";;
 sala)
  echo "Está na sala agora";;
 banheiro | lavanderia)
  echo "foi ao banheiro ou à lavanderia";;
 *)
 echo "Você não está dentro de casa";;
esac
