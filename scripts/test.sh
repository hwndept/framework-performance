#!/bin/bash

reldir=`dirname $0`
cd $reldir

scripts_dir=`pwd`
apps_folder=$scripts_dir/../app
reports_dir_name=.reports
reports_dir_path=$scripts_dir/$reports_dir_name

ab_requests=100
ab_concurrent=10
apps_port=3000

rm -rf $reports_dir_name
mkdir -p $reports_dir_name

for app_folder_name in `ls $apps_folder`; do
  echo "running test for \"$app_folder_name\""

  app_folder_path="$apps_folder/$app_folder_name"

  cd $app_folder_path

  sh start.sh

  ab -r \
    -n $ab_requests \
    -c $ab_concurrent \
    "http://localhost:$apps_port/" > "${reports_dir_path}/${app_folder_name}.report"

  sh stop.sh

  cd $scripts_dir

  sleep 1

  exit
done
