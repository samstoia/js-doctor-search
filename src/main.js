import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

import DoctorSearch from './doctor-search.js';

$(document).ready(function(){
  $("#nameButton").click(function() {
    $(".welcome").hide();
    $("#nameForm").show();
    $("#nameButton").hide();
    $("#conditionButton").hide();
  });

  $("#nameForm").submit(function(event) {
    event.preventDefault();
    let searchName = $('#nameInput').val();

    let doctorSearch = new DoctorSearch();

    let promise = doctorSearch.getName(searchName);

    promise.then(function(response) {
      $('#doctor-name-info').empty();
      let body = JSON.parse(response);
      var table = $('#doctor-name-info');

      if (body.data.length < 1) {
        $("#noResults").text("Your search returned 0 results")
      } else {

      table.append('<thead><tr><th>First Name</th><th>Last Name</th><th>Address</th><th>Phone Number</th><th>Website</th><th>Accepting Patients?</th></tr></thead>');
      body.data.forEach(function(doctor) {
        let website = doctor.practices[0].website;
        if (website === undefined) {
          website = "No Website Listed"
        }

        let acceptingPatients = doctor.practices[0].accepts_new_patients;
        if (acceptingPatients === true) {
          acceptingPatients = "Yes";
        } else {
          acceptingPatients = "No";
        }

        table.append('<tr><td>' + doctor.profile.first_name + '</td>' +
                         '<td>' + doctor.profile.last_name + '</td>' +
                         '<td>' + "Street: " + doctor.practices[0].visit_address.street + '<br>' + "Zip: " + doctor.practices[0].visit_address.zip + '</td>' +
                         '<td>' + doctor.practices[0].phones[0].number + '</td>' +
                         '<td>' + website + '</td>' +
                         '<td>' + acceptingPatients + '</td>' +
                      '</tr>');
      });
      $("#searching").hide();
      $("#bike-info").show();
    }
    });
  });

  $("#conditionButton").click(function() {
    $(".welcome").hide();
    $("#conditionForm").show();
    $("#nameButton").hide();
    $("#conditionButton").hide();
  });

  $("#conditionForm").submit(function(event) {
    event.preventDefault();
    let searchCondition = $('#conditionInput').val();

    let doctorSearch = new DoctorSearch();

    let promise = doctorSearch.getCondition(searchCondition);

    promise.then(function(response) {
      $('#doctor-condition-info').empty();
      let body = JSON.parse(response);
      var table = $('#doctor-condition-info');

      if (body.data.length < 1) {
        $("#noResults").text("Your search returned 0 results")
      } else {

      table.append('<thead><tr><th>First Name</th><th>Last Name</th><th>Address</th><th>Phone Number</th><th>Website</th><th>Accepting Patients?</th></tr></thead>');
      body.data.forEach(function(doctor) {
        let website = doctor.practices[0].website;
        if (website === undefined) {
          website = "No Website Listed"
        }

        let acceptingPatients = doctor.practices[0].accepts_new_patients;
        if (acceptingPatients === true) {
          acceptingPatients = "Yes";
        } else {
          acceptingPatients = "No";
        }

        table.append('<tr><td>' + doctor.profile.first_name + '</td>' +
                         '<td>' + doctor.profile.last_name + '</td>' +
                         '<td>' + "Street: " + doctor.practices[0].visit_address.street + '<br>' + "Zip: " + doctor.practices[0].visit_address.zip + '</td>' +
                         '<td>' + doctor.practices[0].phones[0].number + '</td>' +
                         '<td>' + website + '</td>' +
                         '<td>' + acceptingPatients + '</td>' +
                      '</tr>');
      });
      $("#searching").hide();
      $("#bike-info").show();
    }
    });
  });
});
