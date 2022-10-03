function a () {
    console.log('ada dalam fungsi pertama')

    function b () {
        console.log('ada dalam fungsi kedua')

        function c () {
        console.log('ada dalam fungsi ketiga')
        }

        c();
    }

    b();
}

a();