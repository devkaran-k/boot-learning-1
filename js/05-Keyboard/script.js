const insert = document.getElementById("insert");

window.addEventListener("keydown", function (e) {
  e.preventDefault();
  console.log(e);

  console.log(e.key);
  console.log(e.timeStamp);
  insert.innerHTML = `
    
    <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  
  <tr>
    <td>${e.key}</td>
    <td>${e.keycode}</td>
    <td>${e.code}</td>
  </tr>
</table>

    `
});
