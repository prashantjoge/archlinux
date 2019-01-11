#
# ~/.bash_profile
#

[[ -f ~/.bashrc ]] && . ~/.bashrc
#neofetch
#timedatectl
#sudo wifi-menu does not work with tlp-rdw. It needs networkmanager. Use nmtui
#sudo mount /dev/nvme0n1p3 /mnt/windows/cdrive/
#sudo mount /dev/nvme0n1p4 /mnt/windows/ddrive/
fortune -s bible
export SYSTEMD_EDITOR="/bin/nvim"
if [[ ! $DISPLAY && $XDG_VTNR -eq 1 ]]; then
  exec startx
fi
# MPD daemon start (if no other user instance exists)
[ ! -s ~/.config/mpd/pid ] && mpd
