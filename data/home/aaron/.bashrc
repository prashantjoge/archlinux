#
# ~/.bashrc
#
# If not running interactively, don't do anything
#[[ $- != *i* ]] && return

# To change directory without having to type 'cd'


#echo "Started processing .bashrc"
shopt -s autocd
shopt -s cdspell           # Correct minor spelling errors in cd command
shopt -s cmdhist           # Multiline commands are a single command in history.
export HISTCONTROL=erasedups  # Ignore duplicate entries in history

###  alias
#pywal
#setsid wal  -i /home/aaron/wallpapers/Arch-Linux-Wallpaper-13-1920x1080.jpg
export SYSTEMD_EDITOR=nvim

# added the 2 lines for building fenixedu
#export JAVA_OPTS="-server -Xms256m -Xmx1024m"
#export MAVEN_OPTS="$JAVA_OPTS -Dorg.apache.jasper.compiler.Parser.STRICT_QUOTE_ESCAPING=false"
export JAVA_HOME="/usr/lib/jvm/java-8-openjdk/"
export PDSH_RCMD_TYPE=ssh
export CATALINA_HOME="/usr/share/tomcat8"
alias paco='sudo pacman -Sc && sudo pacman-optimize'
alias unload='udiskie-umount --force --detach /dev/sdb1'
alias music='sudo btmgmt ssp on'
# added as part of lightline.vim
# export TERM=xterm-256color

# Look or  alias
if [ -f ~/.aliasrc ]; then
    . ~/.aliasrc
fi

# To echo commands being executed on the prompt
# set -x
#echo "powerline daemon init"
#echo -n $(date +%H:%M:%S)
# echo " "
#function runpowerline {
powerline-daemon -q
 POWERLINE_BASH_CONTINUATION=1
 POWERLINE_BASH_SELECT=1
. /usr/share/powerline/bindings/bash/powerline.sh
#}
#time runpowerline
#echo "powerline finished"

#echo -n $(date +%H:%M:%S)
#echo " "

# End echo commands being executed
# set +x
alias ls='ls --color=auto'
###screenfetch
#neofetch
#fortune -s bible
export VISUAL=nvim
export EDITOR=nvim
export BROWSER=chromium
export URXVT_PERL_LIB="~/.urxvt/ext"
export XDG_CONFIG_HOME="/home/aaron/.config"
export HISTTIMEFORMAT="%d/%m/%y %T "

#export CLOUDSDK_PYTHON=/usr/bin/python2
# autocompletion
#echo "started bash completion"

#echo -n $(date +%H:%M:%S)
#echo " "
if [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
fi

#echo "finshed bash completion"

#echo -n $(date +%H:%M:%S)
#echo " "
function nvm {
source /usr/share/nvm/init-nvm.sh
nvm "$@"
}
#echo "finished sourcing nvm"

#echo -n $(date +%H:%M:%S)
#echo " "

#THIS MUST BE AT THE END OF THE FILE FOR SDKMAN TO WORK!!!
# disabled 23/10/2019
#export SDKMAN_DIR="/home/aaron/.sdkman"
#[[ -s "/home/aaron/.sdkman/bin/sdkman-init.sh" ]] && source "/home/aaron/.sdkman/bin/sdkman-init.sh"

# alias cmus='screen -q -r -D cmus || screen -S cmus $(which cmus)'
#screen -q -r -D cmus || screen -S cmus $(which cmus)
#source /usr/bin/virtualenvwrapper.sh
#source /usr/bin/virtualenvwrapper.sh

#echo "pyenv initilizing"
#echo -n $(date +%H:%M:%S)
#echo " "
#if command -v pyenv 1>/dev/null 2>&1; then

#	eval "$(pyenv init -)"
#  echo "Pyenv executed"
#fi
#echo "pyenv initialized"

#echo -n $(date +%H:%M:%S)
#echo " "
# Hadoop Stuff
export HADOOP_HOME=/usr/local/hadoop
export HADOOP_MAPRED_HOME=$HADOOP_HOME
export HADOOP_CONF_DIR=$HADOOP_HOME/etc/hadoop
export HADOOP_COMMON_HOME=$HADOOP_HOME
export HADOOP_HDFS_HOME=$HADOOP_HOME
export YARN_HOME=$HADOOP_HOME
export HADOOP_COMMON_LIB_NATIVE_DIR=$HADOOP_HOME/lib/native
export PATH=$PATH:$HADOOP_HOME/sbin:$HADOOP_HOME/bin
export SQOOP_HOME=/usr/lib/sqoop
export PATH=$PATH:$SQOOP_HOME/bin
export FLUME_HOME=/usr/local/flume
export PATH=$PATH:$FLUME_HOME/bin
export CLASSPATH=$FLUME_HOME/lib/
export KAFKA_HOME=/usr/local/kafka
export PATH=$PATH:$KAFKA_HOME/bin
export PIG_HOME=/usr/local/pig
export PATH=$PATH:$PIG_HOME/bin
export PIG_CLASSPATH=$HADOOP_HOME/etc/hadoop
export SPARK_HOME=/usr/local/spark
export SPARK_JARS_DIRS=$SPARK_HOME/jars
export PATH=$PATH:$SPARK_HOME/bin
export PATH=$PATH:$SPARK_JARS_DIRS
export ZOOKEEPER_HOME=/usr/local/zookeeper
export PATH=$PATH:$ZOOKEEPER_HOME/bin
export HIVE_HOME=/usr/local/hive/apache-hive-3.1.2-bin
export PATH=$PATH:$HIVE_HOME/bin
export CLASSPATH=$CLASSPATH:/usr/local/hadoop/lib/*:.
export CLASSPATH=$CLASSPATH:$HIVE_HOME/lib/*:.
export DERBY_HOME=/usr/local/derby
export PATH=$PATH:$DERBY_HOME/bin
export CLASSPATH=$CLASSPATH:$DERBY_HOME/lib/derby.jar:$DERBY_HOME/lib/derbytools.jar
export HBASE_HOME=/usr/local/hbase
export PATH=$PATH:$HBASE_HOME/bin
export HADOOP_OPTS="-Djava.library.path=$HADOOP_HOME/lib/"
export HCAT_HOME=$HIVE_HOME/hcatalog/
export PATH=$PATH:$HCAT_HOME/bin
export STORAGEEXPLORER=/usr/local/storageExplorer
export PATH=$PATH:$STORAGEEXPLORER
#export CHROMIUM=/usr/bin/google-chrome-stable
#export PATH=$PATH:$CHROMIUM
# FXF stuff
#alias pbcopy='xsel --clipboard --input'
#alias pbpaste='xsel --clipboard --output'
export FZF_DEFAULT_OPTS="
--layout=reverse
--info=inline
--height=80%
--multi
--preview-window=:hidden
--preview '([[ -f {} ]] && (bat --style=numbers --color=always {} || cat {})) || ([[ -d {} ]] && (tree -C {} | less)) || echo {} 2> /dev/null | head -200'
--color='hl:148,hl+:154,pointer:032,marker:010,bg+:237,gutter:008'
--prompt='∼ ' --pointer='▶' --marker='✓'
--bind '?:toggle-preview'
--bind 'ctrl-a:select-all'
--bind 'ctrl-y:execute-silent(echo {+} | pbcopy)'
--bind 'ctrl-e:execute(echo {+} | xargs -o nvim)'
--bind 'ctrl-v:execute(code {+})'
"

# export FZF_DEFAULT_COMMAND='locate'
# echo "starting fzf"

# echo -n $(date +%H:%M:%S)
# echo " "
. /usr/share/fzf/key-bindings.bash
. /usr/share/fzf/completion.bash
# echo "finished fzf"

# echo -n $(date +%H:%M:%S)
# echo " "
export FZF_DEFAULT_COMMAND="fd --hidden --follow --exclude '.git' --exclude 'node_modules' --exclude '.npm' --exclude '.nuget' --exclude '.pyenv' --exclude '.electron-gyp' --exclude '.cache' --exclude '.vscode*'"
# export FZF_DEFAULT_COMMAND="fd . $HOME"
export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"
export FZF_ALT_C_COMMAND="fd -t d . $HOME"



export PATH=$PATH:/home/aaron/bin
# echo "started az"
source '/home/aaron/lib/azure-cli/az.completion'
# echo "finished az completion"

# echo -n $(date +%H:%M:%S)
# echo " "
# echo "completed running .bashrc"