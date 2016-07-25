var Todos = require('../models/todoModel')

module.exports = function(app){
  app.get('/api/setupTodos', function(req, res){

    // seed database
    var starterTodos = [
      {
        username: 'test',
        todo: 'buy juice',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'pass guard',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'eat chocolate',
        isDone: false,
        hasAttachment: false
      }
    ];
    Todos.create(starterTodos, function(err, results){
      res.send(results)
    })

  })
}
