import $ from 'jquery';


export default class DoctorSearch {

  getName(searchName) {

    let url = "https://api.betterdoctor.com/2016-03-01/doctors?name=$" + searchName + "&location=or-portland&user_key=" + process.env.exports.apiKey;

    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);

        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  getCondition(searchCondition) {

    let conditionUrl = "https://api.betterdoctor.com/2016-03-01/doctors?query=" + searchCondition + "&location=or-portland&user_key=" + process.env.exports.apiKey;

    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);

        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", conditionUrl, true);
      request.send();
    });
  }
}
