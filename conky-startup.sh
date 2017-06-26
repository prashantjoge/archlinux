#! /bin/bash
## /usr/local/bin
sleep 20s
killall conky
cd "/home/aaron/.conky/Green Apple Desktop"
conky -c "/home/aaron/.conky/Green Apple Desktop/conky_seamod" 
conky -c "/home/aaron/.conky/conky_cmd" 
