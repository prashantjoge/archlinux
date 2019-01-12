#!/usr/bin/bash

BATTERY_CAPACITY=$(cat /sys/class/power_supply/BAT0/capacity)
BATTERY_STATUS=$(cat /sys/class/power_supply/BAT0/status)

SHUTDOWN_WITH=18

NOTIFY_TITLE="Battery Low"
NOTIFY_ICON=battery_empty
NOTIFY_MESSAGE="Shutting Down in 1 minute."

WM=gnome-shell
WMPID=1000
WMUSER="aaron"

if [[ $BATTERY_CAPACITY -le $SHUTDOWN_WITH && $BATTERY_STATUS = "Discharging" ]]; then
/usr/bin/notify-send -i /usr/share/icons/gnome/256x256/status/low-battery.png 'Discharging' 'Out of Juice. Shutting down in 1 minute.'

/usr/bin/sudo -u aaron /usr/bin/paplay --server /run/user/1000/pulse/native /home/aaron/.i3/sounds/click1.wav > /dev/null 2>&1
	sleep 60s
	BATTERY_STATUS=$(cat /sys/class/power_supply/BAT0/status)
	if [[ $BATTERY_STATUS = "Discharging" ]]; then
        
/usr/bin/notify-send -i /usr/share/icons/gnome/256x256/status/low-battery.png 'Discharging' 'Out of Juice. Shutting down now!!!!......'

/usr/bin/sudo -u aaron /usr/bin/paplay --server /run/user/1000/pulse/native /home/aaron/.i3/sounds/click1.wav > /dev/null 2>&1
		systemctl suspend
	fi
fi
