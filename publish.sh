#!/bin/bash
rm -fr docs/*
hugo
cp -r public/* docs/
cp CNAME docs
git add docs
git commit -m 'updated website'
