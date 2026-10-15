'use strict';

const phones = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Alex', phone: '+380501112233' },
  { name: 'Max', phone: '+380671234567' },
];

function findPhoneByName(name) {
  for (let i = 0; i < phones.length; i++) {
    if (phones[i].name === name) {
      return phones[i].phone;
    }
  }

  return '';
}
