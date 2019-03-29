import $ from 'jquery';


export default class DoctorSearch {
  constructor(searchName, searchCondition) {
    this.searchName = searchName;
    this.searchCondition = searchCondition;
    this.apiKey = process.env.exports.apiKey;
    this.url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${searchName}&location=or-portland&user_key=${this.apiKey}`;
    this.conditionUrl = `https://api.betterdoctor.com/2016-03-01/doctors?query=${searchCondition}&location=or-portland&user_key=${this.apiKey}`;
  }

  getName(searchName) {

  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);

      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", this.url, true);
    request.send();
  });

  getCondition(searchName) {

  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);

      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", this.conditionUrl, true);
    request.send();
  });
}
