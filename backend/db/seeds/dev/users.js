exports.seed = function (knex, Promise) {

  return knex('users').del()
    .then(() => {
      return Promise.all([

        knex('users').insert({
          username: 'Gavin', email: '1gavin.love@gmail.com', password: '1234'
        }, 'id')
          .then(() => console.log('Seeding complete!'))
          .catch(error => console.log(`Error seeding data: ${error}`))
      ])
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
