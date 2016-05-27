//VIEW

function View(model) {
  var self = this;

  init = function () {
    var wrapper = tmpl($('#wrapper-template').html());
    $('body').append(wrapper);
    self.elements = {
      input: $('.item-value'),
      addBtn: $('.item-add'),
      listContainer: $('.item-list'),

    }
    self.renderList(model.data);
  }
  self.renderList = function (data) {
    var list = tmpl($('#list-template').html(), {data:data});
    self.elements.listContainer.html(list);
  }

  init();


}
