self.addEventListener
(
 'message',
  function (event) {
    let myData = event
    .data;
    console.log
    (myData.name);
 }
);
