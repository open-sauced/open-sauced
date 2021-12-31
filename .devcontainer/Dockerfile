ARG VARIANT="16-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

RUN \
    sudo apt update &&\
    sudo apt -y upgrade &&\
    sudo apt clean &&\
    sudo apt install -y --no-install-recommends\
      zsh

RUN npm install --global npm@latest
