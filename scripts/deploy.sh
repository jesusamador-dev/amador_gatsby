#!/usr/bin/env sh
set -x
# base=$(basename $PWD) && \
# cd .. && \
ls -l && \
tar -czf package.tgz public/ && \
scp package.tgz $REMOTEUSER@$REMOTEHOST:$REMOTEAPPDIR && \
ssh $REMOTEUSER@$REMOTEHOST 'bash -s' <  /home/travis/build/jesusamador-dev/amador_gatsby/scripts/untar.sh