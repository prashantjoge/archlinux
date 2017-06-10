#! /bin/bash


[[ -f ~/.Xresources ]] && xrdb -merge ~/.Xresources
##export DE="i3"
 exec i3
