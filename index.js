;(function(document, undefined){
  var form = document.getElementById('form');
  form.onsubmit = function(e) {
    e.preventDefault();
    alert('Joined Email List: ' + document.getElementById('email').value);
  };
})(document, void 0);
