#!/bin/bash
set -e
case $1 in
    visualizar)
        defaults write com.apple.finder AppleShowAllFiles TRUE
        KillAll Finder
    ;;
    ocultar)
        defaults write com.apple.finder AppleShowAllFiles FALSE
        KillAll Finder
    ;;
    *)
        KillAll Finder
esac
