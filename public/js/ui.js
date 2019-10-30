const med_data = document.querySelector('.med_data');
$(document).ready(function () {

  // $('.parallax').parallax();
  $('.sidenav').sidenav();
  $('.tooltipped').tooltip();
  $('select').formSelect();
  $('.collapsible').collapsible();
  var elem = document.querySelector('.collapsible.expandable');
  var instance = M.Collapsible.init(elem, {
    accordion: false
  });
  // $('input#input_text, textarea#diagnosis, textarea#extra_doctor_info').characterCounter();

  var current_page = window.location.href;

  var position = current_page.search("notFound");
  if (position != -1) {
    var text = '<span class="white-text text-darken-1">Medical ID Not Found <i class="material-icons">error_outline</i></span>';
    M.toast({ html: text });
  }

  $('.loader-wrapper-pre').fadeOut();
});





// Add medical data
const renderMed_id = (data, id) => {
  if (med_data) {
    var html = ``;
    console.log(data.review_state);
    if (data.review_state == false) {
      if (data.priority === 'critical') {
        html = `
      <li class="medical_data" data-id="${id}">
      <div class="collapsible-header black-text">
        <i class="material-icons">person</i>${data.patient_name}
        <span class="new badge red" data-badge-caption="${data.priority}"></span>
      </div>
      <div class="collapsible-body">
        <span class="white-text">
          <form action="/map" method="GET" class="locate_btn" onsubmit="document.getElementById('loader-wrapper2').style.display = 'block'; getLocation999();">
            <input type="hidden" name="lat" value="${data.coordinates.latitude}" />
            <input type="hidden" name="long" value="${data.coordinates.longitude}" />
            <input type="hidden" name="name" value="${data.patient_name}" />
            <button type="submit" class="btn-floating btn waves-effect
              waves-light green darken-3 white-text">
              <i class="material-icons large">room</i>
            </button>
          </form>
        <form class="doc_form" data-id="${id}"">
          <h6>RESPONSE TIME:</h6>
          <span>Submitted On: ${data.date}</span><br>
          
          <br><hr><br>
          <h6>PATIENT'S INFO:</h6>
          <span>Age: ${data.patient_age} ${data.ageType}</span><br>
          <span>Sex: ${data.sex}</span><br>
          <span>Temperature: ${data.patient_temp}</span><br>
          <span>Blood Pressure: ${data.patient_bp}</span><br>
          <span>Weight: ${data.patient_weight}</span><br>
          <br><hr><br>
          <h6>COMMENT:</h6>
          <span>&#9830; ${data.textarea1}</span><br>
          <br><hr><br>
          <h6>DIAGNOSIS:</h6>
          <span>
            <div class="row">
              <div class="input-field col l8">
                <textarea required placeholder="Enter Diagnosis" id="diagnosis" name="diagnosis" class="materialize-textarea" maxlength="200" data-length="200"></textarea>
              </div>
            </div>
          </span><br>
          <br><hr><br>
          <h6>MEDICAL PRESCRIPTION:</h6>
          <span>
            <div class="row">
              <div class="input-field col l8">
                <input required placeholder="Enter 1st Prescription" id="prescription1" name="prescription1" type="text" class="validate">
              </div>
            </div>
          </span><br>
          <span>
            <div class="row">
              <div class="input-field col l8">
                <input placeholder="Enter 2nd Prescription" id="prescription2" name="prescription2" type="text" class="validate">
              </div>
            </div>
          </span><br>
          <span>
            <div class="row">
              <div class="input-field col l8">
                <input placeholder="Enter 3rd Prescription" id="prescription3" name="prescription3" type="text" class="validate">
              </div>
            </div>
          </span><br>
          <br><hr><br>
          <h6>DOCTOR'S COMMENTS:</h6>
          <span>
            <div class="row">
              <div class="input-field col l8">
                <textarea required placeholder="Add Comment" id="extra_doctor_info" name="extra_doctor_info" class="materialize-textarea" maxlength="200" data-length="200"></textarea>
              </div>
            </div>
          </span><br>
        </span>
        <br>
        <br>
        <button data-id="${id}" class="btn waves-effect waves-light orange darken-3 btn
          white-text"><i class="material-icons right">open_in_new</i>Submit</button>
      </form>
      </div>
    </li>
  `;
      } else {
        html = `
        <li class="medical_data" data-id="${id}">
      <div class="collapsible-header black-text">
        <i class="material-icons">person</i>${data.patient_name}
      </div>
      <div class="collapsible-body">
        <span class="white-text">
          <form action="/map" method="GET" class="locate_btn" onsubmit="document.getElementById('loader-wrapper2').style.display = 'block'; getLocation999();">
            <input type="hidden" name="lat" value="${data.coordinates.latitude}" />
            <input type="hidden" name="long" value="${data.coordinates.longitude}" />
            <input type="hidden" name="name" value="${data.patient_name}" />
            <button type="submit" class="btn-floating btn waves-effect
              waves-light green darken-3 white-text">
              <i class="material-icons large">room</i>
            </button>
          </form>
        <form class="doc_form" data-id="${id}"">
          <h6>RESPONSE TIME:</h6>
          <span>Submitted On: ${data.date}</span><br>
          
          <br><hr><br>
          <h6>PATIENT'S INFO:</h6>
          <span>Age: ${data.patient_age} ${data.ageType}</span><br>
          <span>Sex: ${data.sex}</span><br>
          <span>Temperature: ${data.patient_temp}</span><br>
          <span>Blood Pressure: ${data.patient_bp}</span><br>
          <span>Weight: ${data.patient_weight}</span><br>
          <br><hr><br>
          <h6>COMMENT:</h6>
          <span>&#9830; ${data.textarea1}</span><br>
          <br><hr><br>
          <h6>DIAGNOSIS:</h6>
          <span>
            <div class="row">
              <div class="input-field col l8">
                <textarea required placeholder="Enter Diagnosis" id="diagnosis" name="diagnosis" class="materialize-textarea" maxlength="200" data-length="200"></textarea>
              </div>
            </div>
          </span><br>
          <br><hr><br>
          <h6>MEDICAL PRESCRIPTION:</h6>
          <span>
            <div class="row">
              <div class="input-field col l8">
                <input required placeholder="Enter 1st Prescription" id="prescription1" name="prescription1" type="text" class="validate">
              </div>
            </div>
          </span><br>
          <span>
            <div class="row">
              <div class="input-field col l8">
                <input required placeholder="Enter 2st Prescription" id="prescription2" name="prescription2" type="text" class="validate">
              </div>
            </div>
          </span><br>
          <span>
            <div class="row">
              <div class="input-field col l8">
                <input required placeholder="Enter 3st Prescription" id="prescription3" name="prescription3" type="text" class="validate">
              </div>
            </div>
          </span><br>
          <br><hr><br>
          <h6>DOCTOR'S COMMENTS:</h6>
          <span>
            <div class="row">
              <div class="input-field col l8">
                <textarea required placeholder="Add Comment" id="extra_doctor_info" name="extra_doctor_info" class="materialize-textarea" maxlength="200" data-length="200"></textarea>
              </div>
            </div>
          </span><br>
        </span>
        <br>
        <br>
        <button data-id="${id}" class="btn waves-effect waves-light orange darken-3 btn
          white-text"><i class="material-icons right">open_in_new</i>Submit</button>
      </form>
      </div>
    </li>
  `;
      }


      med_data.innerHTML += html;
    }
  }
};




//Remove Med Data
const removeMed_id = (id) => {
  const medical_data = document.querySelector(`.medical_data[data-id=${id}]`);
  alert("jdslk");
  medical_data.remove();
};






















//Pin Location
function getLocation() {
  document.getElementById('loader-wrapper').style.display = 'block';
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    var text = '<span>ERROR: Check Internet Connection!</span>';
    M.toast({ html: text });
  }//end else
}//end getLocation()

var lat, long;
function showPosition(position) {
  lat = position.coords.latitude;
  long = position.coords.longitude;
  var text = '<span class="green-text text-lighten-3">SUCCESS: Location Pinned Successfully! <i class="material-icons">check_box</i></span>';
  M.toast({ html: text });
  $(".loader-wrapper").fadeOut("slow");
}//end showPosition()

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      var text = '<span>ERROR: User denied the request for Geolocation!</span>';
      M.toast({ html: text });
      break;
    case error.POSITION_UNAVAILABLE:
      var text = '<span>ERROR: Location information is unavailable<br>Check Internet Connection!</span>';
      M.toast({ html: text });
      break;
    case error.TIMEOUT:
      var text = '<span>ERROR: The request to get user location timed out!</span>';
      M.toast({ html: text });
      break;
    case error.UNKNOWN_ERROR:
      var text = '<span>ERROR: An unknown error occurred!</span>';
      M.toast({ html: text });
      break;
  }
  $(".loader-wrapper").fadeOut("slow");
}//end showError()