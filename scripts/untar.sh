#!/usr/bin/env sh
set -x
export NODE_ENV=production
export NVM_BIN=$HOME/.nvm/versions/node/v12.18.1/bin
cd /var/www/jesusamador.com/ && \
rm -R html/ && \
tar zxvf package.tgz -C . && \
mv public/ /var/www/jesusamador.com/html
# mv build/package.json . && \
# npm install
# && \
# npm run start