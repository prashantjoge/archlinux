#! /bin/bash
# /usr/local/bin/openfile.sh
# Script to open files based on the mime types using ROFI
# This is coupled with existing ROFI script

xdg-open "$(locate home | rofi threads 0  -dmenu -i -p "locate:")"

