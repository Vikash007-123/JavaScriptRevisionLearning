import { test } from 'node:test';
import assert from 'node:assert';
import helloWorld from './hello-world.mjs';

test("Returning 'Hello , world!' as a string", () => {
    const result = helloWorld();
    expect(result).toBe('Hello World');
})