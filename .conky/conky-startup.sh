sleep 20s
killall conky
cd "/home/aaron/.conky/Green Apple Desktop"
conky -c "/home/aaron/.conky/Green Apple Desktop/conky_seamod" &
cd "/home/aaron/.conky"
conky -c "/home/aaron/.conky/conky_cmd" &
