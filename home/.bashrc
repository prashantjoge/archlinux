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
# export TERM=xterm-256color

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
export HISTTIMEFORMAT="%d/%m/%y %T "
export GOOGLE_APPLICATION_CREDENTIALS="/home/aaron/googlekey/VoiceTrasilate-611d828153af.json"
export GCF_REGION=us-central1
export GOOGLE_CLOUD_PROJECT=verbat-8a1ff
export BASE_URL=http://localhost:8010/$GOOGLE_CLOUD_PROJECT/$GCF_REGION
export OUTPUT_BUCKET=gs://verbat-8a1ff
export SUPPORTED_LANGUAGE_CODES='en,es,fr'


export CLOUDSDK_PYTHON=/usr/bin/python2
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

# The next line updates PATH for the Google Cloud SDK.
if [ -f '/home/aaron/googlekey/google-cloud-sdk/path.bash.inc' ]; then . '/home/aaron/googlekey/google-cloud-sdk/path.bash.inc'; fi

# The next line enables shell command completion for gcloud.
if [ -f '/home/aaron/googlekey/google-cloud-sdk/completion.bash.inc' ]; then . '/home/aaron/googlekey/google-cloud-sdk/completion.bash.inc'; fi
source /usr/share/nvm/init-nvm.sh
