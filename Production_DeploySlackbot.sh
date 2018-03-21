#!/bin/bash
set -e

SSHTARGET="parse@solestaging"

rsync -r ./* -e ssh $SSHTARGET:~/admin/slackbot

echo "Done"
