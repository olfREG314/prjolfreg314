#!/bin/sh

dir=./src/components/notes/publish

for file in ${dir}/*.vue; do
  sed -i "1 i\ <template>" ${file}
  sed -i "$ a\ </template>" ${file}
done
