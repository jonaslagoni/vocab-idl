
export interface TestAssertion {
  assertion: string
  arguments?: string[]
  tests?: TestAssertion[]
}
export interface Scenario {
  description: string
  schemas: any | any[]
  tests?: TestAssertion[]
}
export type TestScenarios = Scenario | Scenario[];

export function testTemp(fileContent: string, testScenarios: TestScenarios): any {
  for (const scenario of Array.isArray(testScenarios) ? testScenarios : [testScenarios]) {
    //Each schema must go through all tests
    for (const schema of Array.isArray(scenario.schemas) ? scenario.schemas : [scenario.schemas]) {
      //TODO: Generate models for schema 
      //Iterate root assertions for output
      for (const rootAssertion of scenario.tests || []) {
        switch (rootAssertion.assertion) {
        case 'hasClass': 
          hasClass(fileContent, rootAssertion.tests || []);
          break;
        } 
      }
    }
  }
}

function hasClass(content: string, classTests: TestAssertion[]) {
  for (const classTest of classTests) {
    switch (classTest.assertion) {
    case 'hasName': 
      hasClassName(content, classTest);
      break;
    }
  }
}

function hasClassName(content: string, assertion: TestAssertion) {
  const searchString = `class ${assertion.arguments![0]}`;
  const indexOfClassName = content.indexOf(searchString);
  if (indexOfClassName === -1) {
    throw new Error('Has name assertion failed');
  }
}

function hasClassProperty(content: string, assertion: TestAssertion) {
  const searchString = `class ${assertion.arguments![0]}`;
  const indexOfClassName = content.indexOf(searchString);
  if (indexOfClassName === -1) {
    throw new Error('Has name assertion failed');
  }
}
