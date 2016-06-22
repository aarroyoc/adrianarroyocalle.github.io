#!/bin/bash
optipng -o7 *.png
find . -name "*.jpg" -type f -exec jpegtran -copy none -optimize -outfile {} {} \;
