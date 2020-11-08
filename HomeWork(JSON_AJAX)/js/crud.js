const localStorageManager= {

create: function (key, value) {
  localStorage.setItem(key, value)
},
read: function (key) {
 localStorage.getItem (key)
},
update: function (key, value){
 localStorage.setItem(key, JSON.stringify(value))
},
delete:function (key) {
 localStorage.removeItem (key);     
}
}

let as = localStorageManager.create(12,'Action')
console.log (localStorageManager.read(12));
