#!/bin/bash
LANG=en_US.UTF-8

# chmod +x increment-versions.sh
#NEW_VERSION=$(./increment-versions.sh "patch" "1.0.1-SNAPSHOT") && echo $NEW_VERSION

#TP_VERSION="major"
#TP_VERSION="minor"
#TP_VERSION="patch"
#VERSION="1.4.4"
#VERSION="1.0.1-SNAPSHOT"
TP_VERSION=$1
VERSION=$2
#echo "Original Version = $VERSION"

IFS='-' # Setting IFS (input field separator) value as "-"
read -ra versions1 <<< "$VERSION" # Reading the split string into array
IFS='.' # Setting IFS (input field separator) value as "."
read -ra versions2 <<< "${versions1[0]}"


if [ $TP_VERSION = "major" ]
then
 VERSION="$((versions2[0] + 1)).0.0"
elif [ $TP_VERSION = "minor" ]
then
 VERSION="${versions2[0]}.$((versions2[1] + 1)).0"
else
 VERSION="${versions2[0]}.${versions2[1]}.$((versions2[2] + 1))"
fi

if [ ${versions1[1]} ]; then
  VERSION="$VERSION-${versions1[1]}"
fi

#echo "Final Version = $VERSION"
echo "$VERSION"
