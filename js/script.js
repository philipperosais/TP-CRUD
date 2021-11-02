// Déclaration du tableau de saisi à 2 dimensions
let studentList = [['firstname', 'lastname', 'email', 'phone']];
let id = 1;
let inputName, className, idName, idValue;


// ----- CREATE -----

$('.form-control').blur(function () {
  inputName = $(this).prop('id');
  isValid(inputName);
});

function isValid(inputName) {
  let regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð '-]+$/u;
  let regex2 = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/;
  let regex3 = /[0-9]{10}/;
  idName = "#" + inputName;
  className = "." + inputName;
  idValue = $(idName).val();
  if (idName == "#firstname") {
    if (idValue == "") {
      $('label' + className).text("Veuillez entrer votre prénom");
      error(idName);
      return false;
    } else if (!regex.test(idValue)) {
      $('label' + className).text("Saisie du prénom incorrecte");
      error(idName);
      return false;
    } else {
      $(idName).css('background-color', 'rgb(241,242,243)');
      $(idName).css('border-color', 'rgb(206,212,218');
      $('label' + className).text("Prénom");
    }
  }
  if (idName == "#lastname") {
    if (idValue == "") {
      $('label' + className).text("Veuillez entrer votre nom");
      error(idName);
      return false;
    } else if (!regex.test(idValue)) {
      $('label' + className).text("Saisie du nom incorrecte");
      error(idName);
      return false;
    } else {
      $(idName).css('background-color', 'rgb(241,242,243)');
      $(idName).css('border-color', 'rgb(206,212,218');
      $('label' + className).text("Nom");
    }
  }
  if (idName == "#email") {
    if (idValue == "") {
      $('label' + className).text("Veuillez entrer votre email");
      error(idName);
      return false;
    } else if (!regex2.test(idValue)) {
      $('label' + className).text("Saisie de l'email incorrecte");
      error(idName);
    } else {
      idName = "#" + inputName;
      let length = studentList.length;
      for (let index = 0; index < length; index++) {
        if (idValue == studentList[index][2]) {
          $('label' + className).text("Veuillez saisir un autre email");
          error(idName);
          isValid(inputName);
          return false;
        }
      }
      $(idName).css('background-color', 'rgb(241,242,243)');
      $(idName).css('border-color', 'rgb(206,212,218');
      $('label' + className).text("Email");
    }
  }
  if (idName == "#phone") {
    if (idValue == "") {
      $('label' + className).text("Veuillez entrer votre numéro de téléphone");
      error(idName);
      return false;
    } else if (!regex3.test(idValue)) {
      $('label' + className).text("Saisie du numéro incorrecte");
      error(idName);
      return false;
    } else {
      $(idName).css('background-color', 'rgb(241,242,243)');
      $(idName).css('border-color', 'rgb(206,212,218');
      $('label' + className).text("Téléphone");
    }
  }
}

$('#submit').click(function () {
  let firstname = $('#firstname').val();
  let lastname = $('#lastname').val();
  let email = $('#email').val();
  let phone = $('#phone').val();
  isValid('firstname');
  isValid('lastname');
  isValid('email');
  isValid('phone');

  if (firstname != "" && lastname != "" && email != "" && phone != "") {
    studentList.splice(id, 0, [firstname, lastname, email, phone]);


    // ----- READ -----

    showTab(studentList, id);

    // Réinitialisation des inputs après submit
    $('input').val("");
    id++;
  }
});

function showTab(studentList, id) {
  $('#studentList').append(
    '<div class="row border-bottom border-1" id="' + id + '">'+
      '<div class="col-1">' + id +'</div>'+
      '<div class="col-2 overflow-hidden">'+ studentList[id][0] + '</div>'+
      '<div class="col-2 overflow-hidden">' + studentList[id][1] + '</div>'+
      '<div class="col-3 overflow-hidden">' + studentList[id][2] + '</div>'+
      '<div class="col-2 overflow-hidden">' + studentList[id][3] + '</div>'+
      '<div class="col-1">'+
        '<a href="#" class="update ' + id +'"><i class="far fa-edit"></i></a>'+
      '</div>'+
      '<div class="col-1">'+
        '<a href="#" class="erase ' + id +'"><i class="fas fa-ban"></i></a>'+
      '</div>'+
    '</div>');

}

function error(target) {
  $(target).focus();
  $(target).css('background-color', 'rgba(237,28,36,0.3)');
  $(target).css('border-color', 'red');
  return false;
}


// ----- UPDATE -----

$('a').click(function () {
  alert($(this).prop('class'));
});
  // let x= $(a).prop('class');
  // if(x.hasClass('1')){
  //   alert('hello');

// Affiche dans les inputs, les  valeurs correspondant à l'index sélectionné
// $('#firstname').val(studentList[index][0]);
// $('#lastname').val(studentList[index][1]);
// $('#email').val(studentList[index][2]);
// $('#phone').val(studentList[index][3]);

// studentList.splice(index, 1, [$('#firstname').val(),  $('#lastname').val(), $('#email').val(), $('#phone').val()]);
// });


// ----- DELETE -----

function erase() {
  let index = $('a').prop('class');
  console.log(index);
}