#!/bin/bash

var=100
while [ $var -gt 0 ]
do
 echo $var
 var=$[$var-1]
done
