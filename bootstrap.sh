#!/bin/sh

if which gitbook 2>/dev/null; then
  echo "gitbook installed."
else
  echo "no gitbook installed. Begin to install."
  if which yarn 2>/dev/null; then
    yarn global add gitbook
  else
    npm i gitbook -g
  fi
fi

cd ./docs
gitbook install
exit 0;
