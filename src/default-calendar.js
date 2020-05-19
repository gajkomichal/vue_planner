import { uuid } from './utils';
import moment from 'moment';

export default {
  calendars: [
    {
      id: '01',
      name: 'School',
      color: '#ff7675',
    },
    {
      id: '02',
      name: 'Work',
      color: '#55efc4',
    },
    {
      id: '03',
      name: 'Untitled',
      color: '#a29bfe',
    },
    {
      id: '04',
      name: 'Untitled',
      color: '#74b9ff',
    },
  ],
  events: [
    {
      id: uuid(),
      name: 'Design Lecture',
      startTime: moment('Mon May 18 2020 12:00'),
      endTime: moment('Mon May 18 2020 14:30'),
      calendar: '01',
    },
    {
      id: uuid(),
      name: 'Homework',
      startTime: moment('Thu May 21 2020 7:00 '),
      endTime: moment('Thu May 21 2020 9:30'),
      calendar: '01',
    },
  ],
};
