#!/bin/bash

reldir=`dirname $0`
cd $reldir

scripts_dir=`pwd`
apps_dir=$scripts_dir/../app
reports_dir=$scripts_dir/.reports
autocannon=$scripts_dir/../node_modules/.bin/autocannon

test_apps_port=3000
test_concurrency=$npm_package_config_test_concurrency
test_duration=$npm_package_config_test_duration
test_pipelining=$npm_package_config_test_pipelining
test_report_prefix=$(date +%Y%m%d-%H%M%S)

mkdir -p $reports_dir

for app_dir_name in `ls $apps_dir`; do
  echo "running test for app: \"$app_dir_name\""

  app_dir="$apps_dir/$app_dir_name"

  cd $app_dir

  sh start.sh > /dev/null

  test_report_file="${reports_dir}/${test_report_prefix}-${app_dir_name}.json"

  eval $autocannon \
    -c $test_concurrency \
    -d $test_duration \
    -p $test_pipelining \
    --json \
    "http://localhost:3000/hello" > "$test_report_file-1"

  eval $autocannon \
    -c $test_concurrency \
    -d $test_duration \
    -p $test_pipelining \
    --json \
    "http://localhost:3000/hello/Username" > "$test_report_file-2"

  echo "  report file $test_report_file"

  sh stop.sh > /dev/null

  cd $scripts_dir

  sleep 1
done
