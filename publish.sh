#!/bin/bash
rm -fr docs/*
cp -r public/* docs/
cp CNAME docs
git add docs
git commit -m 'updated website'
