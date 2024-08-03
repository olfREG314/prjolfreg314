#/bin/sh

dir=./src/components/notes/publish


cd $dir
for file in *.vue;do
  # sed 's/^\(.\)/\U\1/':
  #   s/: Starts the substitution command in sed.
  #   ^: Anchors the match to the start of the line.
  #   \(.\): Captures the first character. \( ... \) is used for capturing groups in sed.
  #   \U: Tells sed to convert the following character to uppercase.
  #   \1: References the first captured group (the first character).
  capitalized_first_letter=$(echo "$file" | sed 's/^\(.\)/\U\1/')
  # sed -r 's/-(.)/\U\1/g':
  #   -r: Enables extended regular expressions in sed (which allows \U to work properly).
  #   s/: Starts the substitution command in sed.
  #   -(.): Matches a hyphen followed by any character. The parentheses capture the character after the hyphen.
  #   \U: Tells sed to convert the following character to uppercase.
  #   \1: References the first captured group (the character after the hyphen).
  #   g: Applies the substitution globally to all matches in the string.
  converted_filename=$(echo "$capitalized_first_letter" | sed -r 's/-(.)/\U\1/g')
  mv "$file" "$converted_filename"
done
