$(function(){
    let category = document.getElementById("category").getAttribute("value");
    $(document).on('click', '#sendit', function(){
        if(!$('#desDestination').val()){
            alert('신규 취항지명을 입력해주세요');
            $('#desDestination').focus();
            return false;
        }

        if(!$('#desAirportCode').val()) {
            alert('공항코드를 입력해주세요');
            $('#desAirportCode').focus();
            return false;
        }



        /*
                    {
                        "transaction_time":"2022-07-12",
                        "resultCode":"ok",
                        "description":"ok",
                        "data":{
                            "userid":"ryu",
                            "userpw":"1111",
                            "name":"류"
                        }
                    }
         */

        let jsonData = {
            transaction_time: new Date(),
            resultCode:"ok",
            description:"ok",
            data:{
                desContinent: $('#desContinent').val(),
                desDestination: $('#desDestination').val(),
                desAirportCode: $('#desAirportCode').val(),

            }
        }

        $.post({
            url: '/api/'+category,
            data: JSON.stringify(jsonData),
            dataType: 'json',
            contentType: 'application/json',
            success: function(){
                alert('등록성공!');
                location.href='/admin/'+category+'/list';
            },
            error: function(){
                alert('등록실패!');
                location.reload();
            }
        });
    });
});
