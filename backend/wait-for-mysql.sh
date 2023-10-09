#!/bin/bash

echo "Waiting for mysql"
until mysql -h"localhost" -P"3306" -uroot -p"12345678" &> /dev/null
do
  printf "."
  sleep 1
done

echo -e "\nmysql ready"
