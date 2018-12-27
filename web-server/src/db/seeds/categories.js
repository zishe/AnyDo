const uuid = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del().then(function() {
    // Inserts seed entries
    return knex('categories').insert([
      {
        id: uuid(),
        name: 'Мясо',
        description: '',
        image:
          'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--08ae7a852354ccd079c178e18c31f9b18967b615/Screen%20Shot%202018-06-16%20at%2010.58.09.png'
      },
      {
        id: uuid(),
        name: 'Салаты',
        description: '',
        image:
          'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--22fecfbd84d2f03280c13b57cbeaf96444672a6f/Screen%20Shot%202018-06-16%20at%2010.58.47.png'
      },
      {
        id: uuid(),
        name: 'Супы',
        description: '',
        image:
          'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--06afad000bb98864fb8f55e80befa706ac0ab463/Screen%20Shot%202018-06-16%20at%2010.59.28.png'
      },
      {
        id: uuid(),
        name: 'Гарниры',
        description: '',
        image:
          'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f53fe3fc71d4419e3f1efa463fe548d887e8fb00/Screen%20Shot%202018-06-16%20at%2011.00.08.png'
      },
      {
        id: uuid(),
        name: 'Вегетарианская еда',
        description: '',
        image:
          'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--45b466905852276b48881f482fdc22b69aefe35c/Screen%20Shot%202018-07-22%20at%2004.53.38.png'
      },
      {
        id: uuid(),
        name: 'Традиционные блюда',
        description: '',
        image:
          'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bc6cd6a1ad6ca784b02a0e26293ba49144c94819/Screen%20Shot%202018-07-27%20at%2012.23.28.png'
      }
    ]);
  });
};
