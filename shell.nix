{ pkgs ? import <nixpkgs> {} }:

let
  NPM_PREFIX = "$HOME/.npm-global";

in
  pkgs.mkShell {
    inherit NPM_PREFIX;

    packages = with pkgs; [
      busybox
      nodejs-16_x
    ];

    N_PRESERVE_NPM = 1;
    N_PREFIX = "/home/runner/.n";

    shellHook = ''
      npm config set prefix "${NPM_PREFIX}"
      npm i -g npm@latest n typescript-language-server
      export PATH="$N_PREFIX/bin:${NPM_PREFIX}/bin:$PATH"
    '';
  }
