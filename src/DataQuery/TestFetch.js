import $ from 'jquery';

function testQuery() {
      $.get('https://www.boredapi.com/api/activity', function (data, status) {
            alert("Дружище иди : " + data.activity);
      })
}

export default testQuery;