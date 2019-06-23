var APP_ID = 'XJrH6Q0PrsJG3kK0sBeE5MoA-gzGzoHsz';
var APP_KEY = '9EqF2AYmQ29qehraQ6xEAWUC';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


var query = new AV.Query('Message');
query.find()
  .then(function (messages) {
    let array = messages.map((item) => item.attributes)
    array.forEach((item) => {
      let li = document.createElement('li')
      li.innerText = `${item.name}:${item.content}`
      let messageList = document.querySelector('#messageList')
      messageList.appendChild(li)
    })
  }, function (error) {
    alert('有bug，凉凉')
  }).then(() => { }, (error) => {
    console.log(error)
  });



let myForm = $("#postMessageForm");
myForm.on("submit", function (e) {
  e.preventDefault()
  let content = $('input[name=content]').val()
  let name = $('input[name=name]').val()
  var Message = AV.Object.extend('Message');
  var message = new Message();
  message.save({
    'name': name,
    'content': content
  }).then(function (object) {
    let li = document.createElement('li')
    li.innerText = `${object.attributes.name}: ${object.attributes.content}`
    let messageList = document.querySelector('#messageList')
    messageList.appendChild(li)
    $('input[name=content]').val('')
    $('input[name=name]').val('')
    console.log(object)
  })

})








// let myForm =document.querySelector('#postMessageForm')
// myForm.addEventListener('submit',function(e){
//   e.preventDefault()
//   let content =myForm.querySelector('input[name=content]').value
//   var Message = AV.Object.extend('Message');
//   var message = new Message();
//   message.save({
//     'content': content
//   }).then(function (object) {
//     console.log('存入成功')
//     console.log(object)
//   })
// })




// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })