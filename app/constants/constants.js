'use strict';

import {keyBy, range} from 'lodash';

const days = keyBy(range(1, 32));
const months = {
  1: 'Cічень',
  2: 'Лютий',
  3: 'Березень',
  4: 'Квітень',
  5: 'Травень',
  6: 'Червень',
  7: 'Липень',
  8: 'Серпень',
  9: 'Вересень',
  10: 'Жовтень',
  11: 'Листопад',
  12: 'Грудень'
};
const ages = keyBy(range(15, 30));

export {
  days, months, ages
}