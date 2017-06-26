# Archlinux configuration files
## A collection of my archlinux scripts

### Quick Git Rub Off
git clone url          # To create directory on local

git add .              # Then add mew files into the local add do git add

git commit -ma         # Commit the files to local
git pull 
git push origin master # Commit to Github

### Config stuff
i3 config file @ ~/.config/i3/config

I3blocks config @ ~/.config/i3/i3blocks.conf

Compton config @ ~/.config/compton.conf

The dot files (.file) reside in the home directory (~)

get network interface name : ls /sys/class/net/

// copy and paste in Vim from clip board
// took me 2 hours to fig this, because I was unwilling to type so many characters 
// just for a coy and paste...
// cmd:set clipboard=unnamed
// use the "+ register
// copy  <visual>"+y
// visual === v
// paste "+p
// move to 1st character and 1st line : <esc> gg
