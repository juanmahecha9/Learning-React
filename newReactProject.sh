#!/bin/bash
set -e

case $1 in
    *)
        npx create-react-app $1
        ;;
esac