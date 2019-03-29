import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

import DoctorSearch from './doctor-search.js';

$(document).ready(function(){
  $("#nameButton").click(function() {
    $("#nameForm").show();
    $("#nameButton").hide();
    $("#conditionButton").hide();
  });

  $("#nameForm").submit(function(event) {
    event.preventDefault();
    let searchName = $("nameInput").val();

    let doctorSearch = new DoctorSearch();

    let promise = doctorSearch.getName(searchName);



    promise.then(function(response) {
      $('#bike-info').empty();
      let body = JSON.parse(response);
      var table = $('#doctor-info');

      table.append('<thead><tr><th>First Name</th><th>Last Name</th><th>Address</th><th>Phone Number</th><th>Website</th><th>Accepting Patients?</th></tr></thead>');
      body.data.forEach(function(doctor) {
        table.append('<tr><td>' doctor.profile.first_name + '</td>' +
                         '<td>' + doctor.profile.last_name + '</td>' +
                         '<td>' + "Street: " + doctor.practices[0].visit_address.street + '<br>' + "Zip: " + doctor.practices[0].visit_address.zip + '</td>' +
                         '<td>' + doctor.practices[0].phones[0].number + '</td>' +
                         '<td>' + doctor.practices[0].website + '</td>' +
                         '<td>' + doctor.practices[0].accepts_new_patients + '</td>' +
                      '</tr>');
      });
      $("#searching").hide();
      $("#bike-info").show();
    });
  });
});
