#!/usr/bin/env bash

ssh fg@fgbeta.samfundet.no 'bash -s' < $TRAVIS_BUILD_DIR/deploy_script.sh
rsync -r $TRAVIS_BUILD_DIR/src/angular_frontend/dist fg@146.185.181.250:./fg/src/angular_frontend/
