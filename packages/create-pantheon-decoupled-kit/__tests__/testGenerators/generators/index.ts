import { testAdd } from './test.generator';
import { testAppend } from './test-append.generator';
import { testDiff } from './test-diff.generator';
export const decoupledKitTestGenerators = [testAdd, testAppend, testDiff];
