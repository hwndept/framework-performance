#/bin/sh

. ./config.sh

docker build -t $IMAGE_NAME .

docker stop $INSTANCE_NAME 2>/dev/null || true

docker run -itd --rm -p 3000:3000 \
    --name $INSTANCE_NAME \
    $IMAGE_NAME
