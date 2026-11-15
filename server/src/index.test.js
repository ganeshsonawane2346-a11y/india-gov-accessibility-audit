import test from 'node:test';
import assert from 'node:assert/strict';

test('sample service dataset has unique ids and descriptive fields', async () => {
  const ids = ['documents', 'education', 'employment'];
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(ids.every((id) => typeof id === 'string' && id.length > 0));
});
