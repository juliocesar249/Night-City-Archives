
import type { Gang, GangSection } from './types';
import { maelstrom } from './maelstrom';
import { tygerClaws } from './tygerclaws';
import { valentinos } from './valentinos';
import { voodooBoys } from './voodooboys';
import { mox } from './mox';
import { barghest } from './barghest';
import { scavengers } from './scavengers';
import { sixthStreet } from './sixthstreet';
import { animals } from './animals';

export const gangs: Gang[] = [
  maelstrom,
  tygerClaws,
  valentinos,
  voodooBoys,
  mox,
  barghest,
  scavengers,
  sixthStreet,
  animals,
];

export type { Gang, GangSection };
