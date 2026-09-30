import assert from "node:assert/strict";
import {
  calculateBackoffDelay,
  getRetryAfterMs,
  isRetryableStatus,
  sanitizeErrorMessage,
} from "./wordpress-migration-client";

assert.equal(isRetryableStatus(429), true);
assert.equal(isRetryableStatus(500), true);
assert.equal(isRetryableStatus(408), true);
assert.equal(isRetryableStatus(400), false);
assert.equal(isRetryableStatus(401), false);
assert.equal(getRetryAfterMs(new Headers({ "retry-after": "3" })), 3000);
assert.equal(getRetryAfterMs(new Headers({ "retry-after": "Wed, 21 Oct 2015 07:28:00 GMT" }), new Date("Wed, 21 Oct 2015 07:27:00 GMT")), 60000);
assert.equal(calculateBackoffDelay(0, { baseDelayMs: 100, jitterRatio: 0, maxDelayMs: 10000 }), 100);
assert.equal(calculateBackoffDelay(3, { baseDelayMs: 100, jitterRatio: 0, maxDelayMs: 250 }), 250);
assert.equal(sanitizeErrorMessage("https://user:secret@example.test/wp-json", "secret"), "https://user:[redacted]@example.test/wp-json");

console.log("wordpress-migration-client tests passed");
