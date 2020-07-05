function checkloveper() {

    var name = document.getElementById('name').value;
    var lname = document.getElementById('lname').value;

    if (name == "") {
        alert('please enter your name');
    } else if (name.length <= 2) {
        alert('invalid name');
    } else if (!isNaN(name)) {
        alert('Numbers are not allowed');
    } else if (lname == "") {
        alert('please enter your name');
    } else if (name.length <= 2) {
        alert('invalid name');
    } else if (!isNaN(name)) {
        alert('Numbers are not allowed');
    } else {
        var box1 = 0;
        for (var i = 0; i < name.length; i++) {
            box1 += ((name.charAt(i)).charCodeAt());
        }
        var box2 = 0
        for (var i = 0; i < lname.length; i++) {
            box2 += ((lname.charAt(i)).charCodeAt());
        }
        var lovedata = box1 + box2;
        while (lovedata > 100) {
            lovedata -= 99;
        }
        document.getElementById('lovevalue').value = lovedata + "%";
    }
}