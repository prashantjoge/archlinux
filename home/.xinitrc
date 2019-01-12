#! /bin/bash

###udiskie &

export PATH="${PATH}:$HOME/.gem/ruby/2.4.0/bin"
[[ -f ~/.Xresources ]] && xrdb -merge ~/.Xresources
##export DE="i3"
wal -i ~/wallpapers/colorful
bus-update-activation-environment --systemd DISPLAY
eval $(/usr/bin/gnome-keyring-daemon --start --components=pkcs11,secrets,ssh)
export SSH_AUTH_SOCK
xset +fp /.local/share/fonts/           # Prepend a custom font path to Xorg's list of known font paths
xset -fp /usr/share/fonts/sucky_fonts/     # Remove the specified font path from Xorg's list of known font paths
#xset +fp /.local/share/fonts/otf/           # Prepend a custom font path to Xorg's list of known font paths
xset +fp /.local/share/fonts/           # Prepend a custom font path to Xorg's list of known font paths
urxvtd -q -o -f &
exec i3
