'use strict';

function fn() {
  const user1 = { name: 'Alex' };
  let user2 = { name: 'Max' };

  user1.name = 'Ivan';
  user2.name = 'Peter';

  user2 = { name: 'John' }; 

  return { user1, user2 };
}
