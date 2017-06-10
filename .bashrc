#
# ~/.bashrc
#

# If not running interactively, don't do anything
#[[ $- != *i* ]] && return

#black='\e[0;30m'
#blue='\e[0;34m'
#green='\e[0;32m'
#cyan='\e[0;36m'
#red='\e[0;31m'
#purple='\e[0;35m'
#brown='\e[0;33m'
#lightgray='\e[0;37m'
#darkgray='\e[1;30m'
#lightblue='\e[1;34m'
#lightgreen='\e[1;32m'
#lightcyan='\e[1;36m'
#lightred='\e[1;31m'
#lightpurple='\e[1;35m'
#yellow='\e[1;33m'
#white='\e[1;37m'
#nc='\e[0m'

# prompt
#PS1='\[\e[31m\]┌─[\[\e[37m\]\u@\t\[\e[31m\]] \n└─[\[\e[37m\]\W\[\e[31m\]]> '	#root user (red)
#PS1='\[\e[32m\]┌─[\[\e[37m\]\u@\t\[\e[32m\]] \n└─[\[\e[37m\]\W\[\e[32m\]]> '   #regular user (green)

# Look or  alias
if [ -f ~/.aliasrc ]; then
    . ~/.aliasrc
fi


alias ls='ls --color=auto'
##PS1='[\u@\h \W]\$ '
screenfetch
export VISUAL="nano"
export EDITOR="nano"
export BROWSER=chromium


#if [ -d "$HOME/bin" ] ; then
#  PATH="$HOME/bin:$PATH"
#fi

export PS1="[\u@\h::\d]\n[\w]\\$  \[$(tput sgr0)\]"
##export PS1="\[\e[30;1m\](\[\e[34;1m\]\u@\h\[\e[30;1m\])-(\[\e[34;1m\]\t\[\e[30;1m\])-(\[\e[32;1m\]\w\[\e[30;1m\])\[\e[30;1m\]\nhist:\! \[\e[0;33m\] \[\e[1;31m\](jobs:\[\e[34;1m\]\j\[\e[30;1m\])\`if [ \$? -eq 0 ]; then echo \[\e[32m\] \:\-\); else echo \[\e[31m\] \:\-\( ; fi\`\[\e[0m\] $ "


##export PATH="/usr/lib/surfraw"

# autocompletion
if [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
fi



# adds autoomplete to commands that dont work
if [ "$PS1" ]; then
	complete -cf sudo man
fi


# Gotta love ASCII art with figlet
#clear
#echo -e "${LIGHTGRAY}";figlet "Terminal    Fu";
#echo ""
#echo -ne "${red}Today is:\t\t${cyan}" `date`; echo ""
#echo -e "${red}Kernel Information:\t${cyan}" `uname -smr`
#echo -ne "${red}Up time:\t\t${cyan}";uptime | awk /'up/'
#echo ""
#echo -e "${cyan}"; cal -3; echo -e "${lightgray}"
#echo "";
