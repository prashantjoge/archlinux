#! /bin/bash

###udiskie & 

export PATH="${PATH}:$HOME/.gem/ruby/2.4.0/bin"
[[ -f ~/.Xresources ]] && xrdb -merge ~/.Xresources
##export DE="i3"
 exec i3

