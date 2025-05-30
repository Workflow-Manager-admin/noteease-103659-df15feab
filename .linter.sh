#!/bin/bash
cd /home/kavia/workspace/code-generation/noteease-103659-df15feab/noteapp
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

