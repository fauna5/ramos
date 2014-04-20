// initialize Hoodie
var hoodie = new Hoodie('http://ramos.dev:6001');

// initial load of all todo items from the store
hoodie.store.findAll('item').then( function(items) {
  items.sort( sortByTime ).forEach( addItem )
})

// when a new todo gets stored, add it to the UI
hoodie.store.on('add:item', addItem)

// handle creating a new task
function addNew(event) {
	hoodie.store.add('item', {queueLength: $('#queueLength')[0].value, waitTime: $('#time')[0].value});
};

function addItem( item ) {
  $('#todolist').append('<li>' + item.waitTime + ' - ' + item.queueLength + '</li>');
}
function sortByTime(a, b) {
  return a.time > b.time
}