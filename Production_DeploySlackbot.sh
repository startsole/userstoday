#!/bin/bash
set -e

SSHTARGET="parse@solestaging"

rsync ./* -e ssh $SSHTARGET:~/admin/slackbot

echo "Done"
