#
# ~/.bash_logout
#
# to disable the interace : ip link set dev wlan0 down
# Flush IP before diabling interace
sudo ip addr  flush dev  wlp0s29ulu3 
sudo ip route flush dev  wlp0s29ulu3
sudo ip link set dev  wlp0s29ulu3 down
#
