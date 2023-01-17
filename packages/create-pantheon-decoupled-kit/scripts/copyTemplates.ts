#!/usr/bin/env ts-node
import fs from 'fs-extra';

fs.copySync('./src/templates', './dist/templates');
