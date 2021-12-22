FROM gitpod/workspace-full

RUN \
    apt update &&\
    apt -y upgrade &&\
    apt clean &&\
    apt install -y --no-install-recommends\
      libgtk-3-0\
      libx11-xcb1\
      libnss3\
      libxss1\
      libasound2

RUN npm install --global npm@latest
