(function() {

  $.ajax(
    {
      // url: 'http://analytic.adampash.com/hit',
      url: 'http://localhost:3000/hit',
      type: 'PUT',
      data: {url: window.location.href}
    }
  ).done(function(data) {
    console.log(data);
  }
  ).error(function(data) {
    console.log('error');
  }
  ).success(function(data) {
    console.log(data);
  });

}).call(this);
