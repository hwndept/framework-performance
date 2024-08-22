#/bin/sh

. ./config.sh

docker stop $INSTANCE_NAME 2>/dev/null || true
