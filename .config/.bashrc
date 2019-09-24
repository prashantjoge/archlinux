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
export SYSTEMD_EDITOR=nvim

# added the 2 lines for building fenixedu
export JAVA_OPTS="-server -Xms256m -Xmx1024m"
export MAVEN_OPTS="$JAVA_OPTS -Dorg.apache.jasper.compiler.Parser.STRICT_QUOTE_ESCAPING=false"
export JAVA_HOME="/usr/lib/jvm/java-8-openjdk/bin/java"

export PATH=$JAVA_HOME/bin:$PATH
export CATALINA_HOME="/usr/share/tomcat8"
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
#fortune -s bible
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
# added by Anaconda3 5.3.0 installer
# >>> conda init >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$(CONDA_REPORT_ERRORS=false '/home/aaron/anaconda3/bin/conda' shell.bash hook 2> /dev/null)"
if [ $? -eq 0 ]; then
    \eval "$__conda_setup"
else
    if [ -f "/home/aaron/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/home/aaron/anaconda3/etc/profile.d/conda.sh"
        CONDA_CHANGEPS1=false conda activate base
    else
        \export PATH="/home/aaron/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda init <<<

#THIS MUST BE AT THE END OF THE FILE FOR SDKMAN TO WORK!!!
export SDKMAN_DIR="/home/aaron/.sdkman"
[[ -s "/home/aaron/.sdkman/bin/sdkman-init.sh" ]] && source "/home/aaron/.sdkman/bin/sdkman-init.sh"

alias cmus='screen -q -r -D cmus || screen -S cmus $(which cmus)'
#screen -q -r -D cmus || screen -S cmus $(which cmus)
