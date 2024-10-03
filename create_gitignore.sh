#!/bin/bash

for dir in */; do
    if [ -d "$dir" ]; then
        echo "Creating .gitignore in $dir"
        echo "node_modules/" > "$dir/.gitignore"
    fi
done
