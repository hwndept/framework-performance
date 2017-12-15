#!/bin/bash

reldir=`dirname $0`
cd $reldir

scripts_directory=`pwd`
apps_folder=$scripts_directory/../app

for app_folder_name in `ls $apps_folder`; do
  echo "stopping app \"$app_folder_name\""

  app_folder_path="$apps_folder/$app_folder_name"
  
  cd $app_folder_path

  sh stop.sh

  cd $scripts_directory
done