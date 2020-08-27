import { Config } from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'firefox'
  },
  specs: ['*.spec.ts'],
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true,

  onPrepare(): void {
    // Allows protractor to run tests written in Typescript
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json'),
    });
  }
};
