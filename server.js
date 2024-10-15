import { createServer } from 'vite';
import { exec } from 'child_process';
import dotenv from 'dotenv';
import debug from 'debug';
import fs from 'fs';

const log = debug('server');
dotenv.config();

async function runTests() {
  const testRunner = process.env.TEST_RUNNER || 'vitest';
  const testCommand = testRunner === 'vitest' ? 'npm run test:vitest' : 'npm run test:jest';
  log(`Starting test: ${testCommand}`);
  return new Promise((resolve, reject) => {
    exec(testCommand, (error, stdout, stderr) => {
      log('Test output:');
      console.log(stdout);
      if (stderr) {
        console.error(stderr);
      }
      if (error) {
        log('Some tests failed');
        resolve(false);
      } else {
        log('All tests passed');
        resolve(true);
      }
    });
  });
}

async function startServer() {
  log('Starting the server...');
  log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  log(`Test Runner: ${process.env.TEST_RUNNER || 'vitest'}`);
  log(`Port: ${process.env.PORT || 5173}`);

  if (process.env.TEST === '1') {
    log('Running tests...');
    const testsPassed = await runTests();
    if (!testsPassed && process.env.NODE_ENV === 'production') {
      log('Tests failed in production environment. Aborting server start.');
      process.exit(1);
    }
  } else {
    log('Skipping tests (TEST environment variable is not set to 1)');
  }

  try {
    const server = await createServer({
      configFile: fs.existsSync('./vite.config.ts') ? './vite.config.ts' : undefined,
      server: {
        port: process.env.PORT || 5173,
      },
    });

    await server.listen();
    server.printUrls();
  } catch (error) {
    console.error('Failed to start Vite server:', error);
    process.exit(1);
  }
}

startServer();