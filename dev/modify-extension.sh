#/bin/sh

dir=./src/components/notes/publish

for file in ${dir}/*.html;do
  mv -- "$file" "${file%.html}.vue"
done
