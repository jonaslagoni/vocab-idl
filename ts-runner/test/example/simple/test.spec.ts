import * as fs from 'fs';
import * as path from 'path';
import {testTemp} from '../../../src';

describe('Some test', () => {
  test('basic example', () => {
    const testScenarioString = fs.readFileSync(path.resolve(__dirname, './test.json'), 'utf8');
    const testScenario = JSON.parse(testScenarioString);
    const expectedClass = fs.readFileSync(path.resolve(__dirname, './TestName.ts'), 'utf8');

    testTemp(expectedClass, testScenario);
  });
});
