
import type { Corporation, CorporationSection } from './types';
import { arasaka } from './arasaka';
import { militech } from './militech';
import { kangTao } from './kangtao';
import { petrochem } from './petrochem';
import { biotechnica } from './biotechnica';
import { nightCorp } from './nightcorp';
import { zetatech } from './zetatech';
import { netWatch } from './netwatch';
import { traumaTeam } from './traumateam';

export const corporations: Corporation[] = [
  arasaka,
  militech,
  kangTao,
  petrochem,
  biotechnica,
  nightCorp,
  zetatech,
  netWatch,
  traumaTeam,
];

export type { Corporation, CorporationSection };
