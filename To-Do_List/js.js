window.onload = function() {
    var btn = document.getElementById('tdb')
    var list = document.getElementById('list')
    var inp = document.getElementById('input')
    var btnr = document.getElementById('tdr')

    var inputValue = '';
    inp.addEventListener('input', function(e) {
        inputValue = e.target.value;
    })

    function addList() {

        if (inputValue !== null && inputValue !== undefined && inputValue !== '') {
            var NewList = document.createElement('li')
            var txt = document.createTextNode(inputValue)
            NewList.appendChild(txt)
            list.appendChild(NewList)

            inp.value = '';
            inputValue = '';
        } else {
            alert("Invalid Action");
        }

    }
    inp.addEventListener('keydown', function(e) {
        if (e.keyCode == 13) {
            addList();
        };
    })
    btn.addEventListener('click', addList);


    btnr.addEventListener('click', function() {
        var lst = list.lastElementChild
        list.removeChild(lst)

    })
}