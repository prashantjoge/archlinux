#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
##PS1='[\u@\h \W]\$ '
screenfetch
export VISUAL="nano"
export PS1="[\u@\h::\d]\n[\w]\\$  \[$(tput sgr0)\]"

