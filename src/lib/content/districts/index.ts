
import type { District } from './types';
import { watson } from './watson';
import { westbrook } from './westbrook';
import { cityCenter } from './citycenter';
import { heywood } from './heywood';
import { santoDomingo } from './santodomingo';
import { pacifica } from './pacifica';
import { dogtown } from './dogtown';
import { badlands } from './badlands';

export const districts: District[] = [
  watson,
  westbrook,
  cityCenter,
  heywood,
  santoDomingo,
  pacifica,
  dogtown,
  badlands,
];

export type { District };
