function Controller(model, view) {
  var self = this;

  view.elements.addBtn.on('click', addItem);
  view.elements.input.keypress(function (e) {
    if(e.which == 13){
      addItem();
    }
  })
  view.elements.listContainer.on('click', '.item-delete', removeItem);
  view.elements.listContainer.on('click','.dispaly-item', editItem);

  function addItem(){
    var newItem = view.elements.input.val();
    if(newItem.length === 0){
      return
    }else{

      model.addItem(newItem);
      view.renderList(model.data);
      view.elements.input.val('');
    }
  }
  function removeItem() {
    var item = $(this).attr('data-value');

    model.removeItem(item);
    view.renderList(model.data);
  }
  function editItem() {
    var item = $(this).attr('data-b');
    var index = $('.dispaly-item').index(this);
    var editItem = $('.dispaly-item').eq(index);
    var editItemInput = $('.edit').eq(index);
    var newItem = editItem.html();

    editItemInput.val(editItem.html());
    editItem.hide();
    editItemInput.show();
    editItemInput.select();

    editItemInput.keypress(function (e) {
       if(e.which === 13){
         editItemInput.hide();
         editItem.html(editItemInput.val());
         editItem.show();
         newItem = editItem.html();
         model.editItem(item, newItem);
         view.renderList(model.data);
       }
     });
     editItemInput.focusout(function(){
       editItemInput.hide();
       editItem.html(editItemInput.val());
       editItem.show();
       newItem = editItem.html();
       model.editItem(item, newItem);
       view.renderList(model.data);
     });
  }
}
