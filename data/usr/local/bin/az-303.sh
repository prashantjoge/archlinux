#!/usr/bin/bash

echo $((($(date +%s --date "2021-02-10")-$(date +%s))/(3600*24))) days
