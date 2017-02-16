

import { keyBy, range } from 'lodash';

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
  12: 'Грудень',
};
const ages = keyBy(range(15, 30));

const sort_types = {
  0: 'По популярності',
  1: 'По даті реєстрації',
};

const statuses = {
  1: 'Незаміжня',
  2: 'Зустрічається',
  3: 'Заручена',
  4: 'Заміжня',
  5: 'Все складно',
  6: 'В активному пошуку',
  7: 'Закохана',
  8: 'Без статусу',
};

const birth_years = keyBy(range(1900, 2017));

export {
  days, months, ages, sort_types, statuses, birth_years,
};
