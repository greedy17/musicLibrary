function getLibrary(){
  $(function(){
    $.ajax({
      type: 'GET',
      url: "http://www.devcodecampmusiclibrary.com/api/music",
      dataType: 'json',
      success: function(){
        $('.library').html('');
      }
    })
    .then(function(data){
      $.each(data, function(index, value){
        $('.library').append(
          '<tr>' +
          '<td>' + value.title + '</td>' +
          '<td>' + value.album + '</td>' +
          '<td>' + value.artist + '</td>' +
          '<td>' + value.genre + '</td>' +
          '<td>' + value.releaseDate + '</td>' +
          '</tr>'
        );
      });
    });
  });
}

getLibrary();