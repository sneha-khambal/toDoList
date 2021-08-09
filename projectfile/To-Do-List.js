
var app = new function () {
  this.tasks = [];
  this.tbody = document.getElementById('task');

  // rendering to do list in html
  this.fetchAll = function () {
    var data = '';
    if (this.tasks.length > 0) {
      for (i = 0; i < this.tasks.length; i++) {
        data += '<tr>';
        data += '<td>' + (i + 1) + '.' + '</td>'
        data += '<td>' + this.tasks[i] + '</td>';
        data += '<td> <a onclick="app.edit(' + i + ')" >edit</a> </td>';
        data += '<td> <a onclick="app.delete(' + i + ')">Delete</a> </td>';
        data += '</tr>';
      }
    }
    document.getElementById('to-do').style.display = "block"
    this.count(this.tasks.length);
    return this.tbody.innerHTML = data
  }

  //add new task to list
  this.add = function () {
    var add = document.getElementById('add-to-do');

    var task = add.value;
    if (task === '') {
      alert('add task')
    } else {
      this.tasks.push(task.trim());
      add.value = '';

      this.fetchAll();
    }
  }

  // edit the existing task
  this.edit = function (item) {
    var edit = document.getElementById('edit-to-do')
    edit.value = this.tasks[item];
    self = this;
    document.getElementById('edit-box').style.display = "block"

    document.getElementById('save-edit').onsubmit = function () {
      var task = edit.value;
      if (task) {
        self.tasks.splice(item, 1, task.trim());
        self.fetchAll();
        closeInput();
      }}}


  // delete the task from list
  this.delete = function (item) {
    this.tasks.splice(item, 1);
    this.fetchAll()
  }

  // count the existing tasks
  this.count = function (item) {
    let name = 'tasks';
    if (item) {
   if (item == 1) {
        name = 'task';
  }
      document.getElementById('counter').innerHTML = item + " " + name;
    }
    else {
      document.getElementById('counter').innerHTML = 'No' + " " + name
    }
  }
}

//clos the edit field after editing the task
function closeInput() {
  document.getElementById('edit-box').style.display = "none";
}


