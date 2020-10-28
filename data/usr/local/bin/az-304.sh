#!/usr/bin/bash

echo $((($(date +%s --date "2021-03-24")-$(date +%s))/(3600*24))) days
