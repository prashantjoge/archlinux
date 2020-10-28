#!/usr/bin/bash

echo $((($(date +%s --date "2020-12-23")-$(date +%s))/(3600*24))) days
