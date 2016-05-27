require(
  ['lib/jquery-1.12.3.js','model','view','controller'],
  function(){
    $(function(){
      var list = ['to do morning exercises','to cook the pizza','to walk with friends'];
      var model = new Model(list);
      var view = new View(model);
      var controller = new Controller(model, view);
    });
  }
);
