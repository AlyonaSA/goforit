//MODEL
function Model(data) {
  var self = this;
  self.data = data;
  self.addItem = function (item) {
    self.data.push(item);
    if(item.length === 0){
        return
    }
      return self.data;
  }

  self.removeItem = function (item) {
    var index = self.data.indexOf(item);
    if(index === -1){
      return
    }
    self.data.splice(index, 1);
    return(self.data);
  }
  self.editItem = function(item, newItem) {
    var index = self.data.indexOf(item);
    if(index === -1){
      return
    }
    self.data.splice(index, 1, newItem);
    return(self.data);
  }
}
