let btn = document.querySelector('#SubscribeBtn');
  let modal = document.querySelector('#myModal');
  let cloceBtn = document.querySelector('#closeBtn');
  let modal_close = document.querySelector('#modal-close');
  let input = document.querySelector('#input');
  let form = document.querySelector('#form');

  // form.onsubmit = function(evt){
  //   if(input.value == ''){
  //     evt.preventDefaut();
  //   }else {modal.style.display = 'flex';
  //   }
  // }


  btn.addEventListener('click', function() {
  	if (input.value == '') {
  		return false;
  	}else {modal.style.display = 'flex';
  	}
  });

  cloceBtn.addEventListener('click', function() { 
  	modal.style.display = 'none';
  });

  modal_close.addEventListener('click', function() { 
  	modal.style.display = 'none';
  });

  window.addEventListener('click', function(e) { 
  	if(e.target == modal){
  	modal.style.display = 'none';
  	}
  });