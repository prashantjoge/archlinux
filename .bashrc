#
# ~/.bashrc
#

# If not running interactively, don't do anything
#[[ $- != *i* ]] && return

# To change directory without having to type 'cd'
 shopt -s autocd



# prompt
## PS1='\[\e[31m\]┌─[\[\e[37m\]\u@\t\[\e[31m\]] \n└─[\[\e[37m\]\W\[\e[31m\]]> '	#root user (red)
##  export PS1='\[\e[32m\]┌─[\[\e[37m\]\u@\t\[\e[32m\]] \n└─[\[\e[37m\]\W\[\e[32m\]]> '   #regular user (green)

# Look or  alias
if [ -f ~/.aliasrc ]; then
    . ~/.aliasrc
fi


alias ls='ls --color=auto'
##PS1='[\u@\h \W]\$ '
screenfetch
export VISUAL=nano
export EDITOR=nano
export BROWSER=chromium
export URXVT_PERL_LIB="~/.urxvt/ext"

#if [ -d "$HOME/bin" ] ; then
#  PATH="$HOME/bin:$PATH"
#fi

##export PS1="[\u@\h::\d]\n[\w]\\$  \[$(tput sgr0)\]"
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


## Start dhcpcd service
sudo systemctl enable dhcpcd.service

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

###########################################################
####                   F@ncy Prompt                   #####      
###########################################################
# get current branch in git repo
function parse_git_branch() {
	BRANCH=`git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/\1/'`
	if [ ! "${BRANCH}" == "" ]
	then
		STAT=`parse_git_dirty`
		echo "[${BRANCH}${STAT}]"
	else
		echo ""
	fi
}

# get current status of git repo
function parse_git_dirty {
	status=`git status 2>&1 | tee`
	dirty=`echo -n "${status}" 2> /dev/null | grep "modified:" &> /dev/null; echo "$?"`
	untracked=`echo -n "${status}" 2> /dev/null | grep "Untracked files" &> /dev/null; echo "$?"`
	ahead=`echo -n "${status}" 2> /dev/null | grep "Your branch is ahead of" &> /dev/null; echo "$?"`
	newfile=`echo -n "${status}" 2> /dev/null | grep "new file:" &> /dev/null; echo "$?"`
	renamed=`echo -n "${status}" 2> /dev/null | grep "renamed:" &> /dev/null; echo "$?"`
	deleted=`echo -n "${status}" 2> /dev/null | grep "deleted:" &> /dev/null; echo "$?"`
	bits=''
	if [ "${renamed}" == "0" ]; then
		bits=">${bits}"
	fi
	if [ "${ahead}" == "0" ]; then
		bits="*${bits}"
	fi
	if [ "${newfile}" == "0" ]; then
		bits="+${bits}"
	fi
	if [ "${untracked}" == "0" ]; then
		bits="?${bits}"
	fi
	if [ "${deleted}" == "0" ]; then
		bits="x${bits}"
	fi
	if [ "${dirty}" == "0" ]; then
		bits="!${bits}"
	fi
	if [ ! "${bits}" == "" ]; then
		echo " ${bits}"
	else
		echo ""
	fi
}

 PS2=" "
##export PS1="\u@\h:[\w]:[\`parse_git_branch\`]:\A "
##:[\'parse_git_branch\']
export  PS1="\n\[\e[30;1m\]\[\016\]l\[\017\](\[\e[34;1m\]\u@\h\[\e[30;1m\])-(\[\e[34;1m\]\j\[\e[30;1m\])-(\[\e[34;1m\]\@ \d\[\e[30;1m\])->\[\e[30;1m\]\n\[\016\]m\[\017\]-(\[\[\e[32;1m\]\w\[\e[30;1m\])-(\[\e[32;1m\]\$(/bin/ls -1 | /usr/bin/wc -l | /bin/sed 's: ::g') files, \$(/bin/ls -lah | /bin/grep -m 1 total | /bin/sed 's/total //')b\[\e[30;1m\])\`parse_git_branch\` --> \[\e[0m\]"
###export PS1 & PS2
###########################################################
####                  END OF F@NCY PROMPT              #### 
###########################################################
