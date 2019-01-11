#
# ~/.bashrc
#

# If not running interactively, don't do anything
#[[ $- != *i* ]] && return

# To change directory without having to type 'cd'
 shopt -s autocd

###  alias
#pywal
#setsid wal  -i /home/aaron/wallpapers/Arch-Linux-Wallpaper-13-1920x1080.jpg


alias paco='sudo pacman -Sc && sudo pacman-optimize'
#alias music='ncmpcpp'
alias unload='udiskie-umount --force --detach /dev/sdb1'
# added as part of lightline.vim
export TERM=xterm-256color

# Look or  alias
if [ -f ~/.aliasrc ]; then
    . ~/.aliasrc
fi
powerline-daemon -q
POWERLINE_BASH_CONTINUATION=1
POWERLINE_BASH_SELECT=1
. /usr/share/powerline/bindings/bash/powerline.sh

alias ls='ls --color=auto'
##PS1='[\u@\h \W]\$ '
###screenfetch
#neofetch
fortune -s bible
export VISUAL=nvim
export EDITOR=nvim
export BROWSER=chromium
export URXVT_PERL_LIB="~/.urxvt/ext"
export XDG_CONFIG_HOME="/home/aaron/.config"


# autocompletion
if [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
fi

#function _update_ps1() {
#    PS1=$(powerline-shell $?)
#}

#if [[ $TERM != linux && ! $PROMPT_COMMAND =~ _update_ps1 ]]; then
#    PROMPT_COMMAND="_update_ps1; $PROMPT_COMMAND"
#fi
# Fonts
