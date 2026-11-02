import assert from "node:assert/strict";
import { applyTeamPositions } from "./teamOrder";

// WordPress returns newest first, so Hanna (post 233) arrives at the top.
const ids = [233, 230, 207, 154, 152, 150, 148, 146, 144, 142, 140, 138, 136, 134, 132];
const ordered = applyTeamPositions(ids, (id) => id);

// Hanna sits 10th on /team; the others keep their WordPress order.
assert.equal(ordered.indexOf(233), 9);
assert.deepEqual(ordered.filter((id) => id !== 233), ids.slice(1));

// With fewer members than the pinned spot, she goes last instead of disappearing.
assert.deepEqual(applyTeamPositions([233, 230, 207], (id) => id), [230, 207, 233]);
