#
# ~/.bash_profile

[[ -f ~/.bashrc ]] && . ~/.bashrc
#neofetch
#timedatectl
#sudo wifi-menu does not work with tlp-rdw. It needs networkmanager. Use nmtui
#sudo mount /dev/nvme0n1p3 /mnt/windows/cdrive/
#sudo mount /dev/nvme0n1p4 /mnt/windows/ddrive/
# fortune -s bible

# MPD daemon start (if no other user instance exists)
##[ ! -s ~/.config/mpd/pid ] && mpd
# Add .NET Core SDK tools
export PATH="$PATH:/home/aaron/.dotnet/tools:/home/aaron/.local/bin"
#export MSBuildSDKsPath=/opt/dotnet/sdk/2.2.105/Sdks

export MSBuildSDKsPath=/usr/share/dotnet/sdk/3.1.103/
#export PATH=$MSBuildSDKsPath:$PATH
#eval "$(pyenv init -)"
#alias cmus='screen -q -r -D cmus || screen -S cmus $(which cmus)'
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python
export WORKON_HOME=$HOME/.virtualenvs
export PROJECT_HOME=$HOME/projects
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
#eval "$(pyenv init -)"
#export PATH=$(pyenv root)/shims:$PATH

if command -v pyenv 1>/dev/null 2>&1; then
  eval "$(pyenv init -)"
#  echo "Pyenv executed from .bash_profile"
fi
# echo "i was executed"
export SYSTEMD_EDITOR="/bin/nvim"

# Add .NET Core SDK tools
export PATH="$PATH:/root/.dotnet/tools"
# Add .NET Core SDK tools
export PATH="$PATH:/root/.dotnet/tools"

# echo "Completed running .bash_profile"
if [[ ! $DISPLAY && $XDG_VTNR -eq 1 ]]; then
  exec startx
fi