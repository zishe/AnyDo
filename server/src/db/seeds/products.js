const uuid = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del().then(function() {
    // Inserts seed entries
    return knex('products').insert([
      {
        id: uuid(),
        name: 'Рис отварной',
        description: '',
        // ingredients: [
        //   {
        //     id: 2,
        //     name: 'Рис',
        //     description: '',
        //     tagList: [ 'высшее качество' ],
        //     ingredientTypes: [
        //       {
        //         id: 1,
        //         name: 'Бурый',
        //         description: '',
        //         ingredientId: 2,
        //       },
        //       {
        //         id: 2,
        //         name: 'Жасмин',
        //         description: '',
        //         ingredientId: 2,
        //       },
        //       {
        //         id: 3,
        //         name: 'Басмати',
        //         description: '',
        //         ingredientId: 2,
        //       },
        //       {
        //         id: 4,
        //         name: 'Красный',
        //         description: '',
        //         ingredientId: 2,
        //       },
        //       {
        //         id: 5,
        //         name: 'Арборио',
        //         description: '',
        //         ingredientId: 2,
        //       },
        //       {
        //         id: 6,
        //         name: 'Дикий',
        //         description: '',
        //         ingredientId: 2,
        //       },
        //       {
        //         id: 7,
        //         name: 'Ризотто',
        //         description: '',
        //         ingredientId: 2,
        //       }
        //     ],
        //     tags: [ { id: 1, name: 'высшее качество', taggingsCount: 2 } ]
        //   }
        // ],
        image:
          'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--407dfd141be9925887f92de5548068d7bd605e3c/recipe-steamed_rice.png'
      },
      {
        id: uuid(),
        name: 'Салат Витаминный',
        description: '',
        // ingredients: [
          // {
          //   id: 8,
          //   name: 'Огурцы',
          //   description: '',
          //   tagList: [],
          //   ingredientTypes: [],
          //   tags: []
          // },
          // {
          //   id: 11,
          //   name: 'Листья салата',
          //   description: '',
          //   tagList: [],
          //   ingredientTypes: [],
          //   tags: []
          // },
          // {
          //   id: 9,
          //   name: 'Помидоры',
          //   description: '',
          //   tagList: [],
          //   ingredientTypes: [
          //     {
          //       id: 23,
          //       name: 'Черри',
          //       description: '',
          //       ingredientId: 9,
          //     },
          //     {
          //       id: 24,
          //       name: 'Розовый',
          //       description: '',
          //       ingredientId: 9,
          //     },
          //     {
          //       id: 25,
          //       name: 'Дамские пальчики',
          //       description: '',
          //       ingredientId: 9,
          //     }
          //   ],
          //   tags: []
          // }
        // ],
        image:
          'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f3af413d6d0957446abbb0725fe011a6a397b997/1391974261_701329830-e1439463553231-1024x603.jpg'
      },
      {
        id: uuid(),
        name: 'Гречка отварная',
        description: '',
        // ingredients: [
        //   {
        //     id: 1,
        //     name: 'Греча',
        //     description: '',
        //     tagList: [ 'крупная', 'высшее качество' ],
        //     ingredientTypes: [
        //       {
        //         id: 14,
        //         name: 'Ядрица',
        //         description: '',
        //         ingredientId: 1,
        //       },
        //       {
        //         id: 15,
        //         name: 'Продел',
        //         description: '',
        //         ingredientId: 1,
        //       },
        //       {
        //         id: 16,
        //         name: 'Зеленая',
        //         description: '',
        //         ingredientId: 1,
        //       },
        //       {
        //         id: 17,
        //         name: 'Смоленская',
        //         description: '',
        //         ingredientId: 1,
        //       }
        //     ],
        //     tags: [
        //       { id: 5, name: ' крупная', taggingsCount: 1 },
        //       { id: 1, name: 'высшее качество', taggingsCount: 2 }
        //     ]
        //   },
        //   {
        //     id: 12,
        //     name: 'Сливочное масло',
        //     description: '',
        //     tagList: [ 'хорошее дорогое', 'любое', 'французское' ],
        //     ingredientTypes: [
        //       {
        //         id: 18,
        //         name: 'Традиционное',
        //         description: 'массовая доля жира 82,5 %',
        //         ingredientId: 12,
        //       },
        //       {
        //         id: 19,
        //         name: 'Любительское',
        //         description: 'массовая доля жира 80,0 %',
        //         ingredientId: 12,
        //       },
        //       {
        //         id: 20,
        //         name: 'Крестьянское',
        //         description: 'массовая доля жира 72,5 %',
        //         ingredientId: 12,
        //       },
        //       {
        //         id: 21,
        //         name: 'Бутербродное',
        //         description: 'массовая доля жира 61,0 %',
        //         ingredientId: 12,
        //       },
        //       {
        //         id: 22,
        //         name: 'Чайное',
        //         description: 'массовая доля жира 50,0 %',
        //         ingredientId: 12,
        //       }
        //     ],
        //     tags: [
        //       { id: 8, name: ' хорошее дорогое', taggingsCount: 1 },
        //       { id: 7, name: ' любое', taggingsCount: 1 },
        //       { id: 6, name: 'французское', taggingsCount: 1 }
        //     ]
        //   }
        // ],
        image:
          'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e82b60f90e63f1b8e973347a2d13d9ffc2fdef99/buckweat.jpg'
      },
      {
        id: uuid(),
        name: 'Пюрешка с котлеткой',
        description: '',
        // ingredients: [
        //   {
        //     id: 7,
        //     name: 'Картофель',
        //     description: '',
        //     tagList: [],
        //     ingredientTypes: [],
        //     tags: []
        //   },
        //   {
        //     id: 12,
        //     name: 'Сливочное масло',
        //     description: '',
        //     tagList: [ 'хорошее дорогое', 'любое', 'французское' ],
        //     ingredientTypes: [
        //       {
        //         id: 18,
        //         name: 'Традиционное',
        //         description: 'массовая доля жира 82,5 %',
        //         ingredientId: 12,
        //       },
        //       {
        //         id: 19,
        //         name: 'Любительское',
        //         description: 'массовая доля жира 80,0 %',
        //         ingredientId: 12,
        //       },
        //       {
        //         id: 20,
        //         name: 'Крестьянское',
        //         description: 'массовая доля жира 72,5 %',
        //         ingredientId: 12,
        //       },
        //       {
        //         id: 21,
        //         name: 'Бутербродное',
        //         description: 'массовая доля жира 61,0 %',
        //         ingredientId: 12,
        //       },
        //       {
        //         id: 22,
        //         name: 'Чайное',
        //         description: 'массовая доля жира 50,0 %',
        //         ingredientId: 12,
        //       }
        //     ],
        //     tags: [
        //       { id: 8, name: ' хорошее дорогое', taggingsCount: 1 },
        //       { id: 7, name: ' любое', taggingsCount: 1 },
        //       { id: 6, name: 'французское', taggingsCount: 1 }
        //     ]
        //   }
        // ],
        image:
          'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1070d61af2bb6398adaccd888ba8366819b42a76/14685734206651.jpg'
      },
      {
        id: uuid(),
        name: 'Борщ',
        description: '',
        // ingredients: [
        //   {
        //     id: 5,
        //     name: 'Вода',
        //     description: '',
        //     tagList: [],
        //     ingredientTypes: [
        //       {
        //         id: 13,
        //         name: 'Ультрапресная',
        //         description: '',
        //         ingredientId: 5,
        //       }
        //     ],
        //     tags: []
        //   },
        //   {
        //     id: 6,
        //     name: 'Соль',
        //     description: '',
        //     tagList: [],
        //     ingredientTypes: [],
        //     tags: []
        //   },
        //   {
        //     id: 7,
        //     name: 'Картофель',
        //     description: '',
        //     tagList: [],
        //     ingredientTypes: [],
        //     tags: []
        //   },
        //   {
        //     id: 13,
        //     name: 'Свекла',
        //     description: '',
        //     tagList: [],
        //     ingredientTypes: [],
        //     tags: []
        //   },
        //   {
        //     id: 14,
        //     name: 'Говядина',
        //     description: '',
        //     tagList: [],
        //     ingredientTypes: [
        //       {
        //         id: 26,
        //         name: 'Вырезка',
        //         description: '',
        //         ingredientId: 14,
        //       },
        //       {
        //         id: 27,
        //         name: 'Лопатка',
        //         description: '',
        //         ingredientId: 14,
        //       },
        //       {
        //         id: 28,
        //         name: 'Голень',
        //         description: '',
        //         ingredientId: 14,
        //       },
        //       {
        //         id: 29,
        //         name: 'Шея',
        //         description: '',
        //         ingredientId: 14,
        //       }
        //     ],
        //     tags: []
        //   }
        // ],
        image:
          'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4aa0fecb10214aa247b2a8fd124a160123eec2d4/Screen%20Shot%202018-07-27%20at%2012.23.28.png'
      }
    ]);
  });
};
