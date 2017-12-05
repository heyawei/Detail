var tab = document.getElementById('tab');
var tHead = tab.tHead;
var tr = tHead.rows[0].cells;
var tbody = tab.tBodies[0];
var tbodyRows = tbody.rows;
function getData() {
    var xml = new XMLHttpRequest();
    xml.open('post', 'data.txt', false);
    xml.onreadystatechange = function () {
        if (xml.readyState == 4 && /^2\d{2}$/.test(xml.status)) {
            data =utils.jsonParse(xml.responseText);
            console.log(data)
        }
    };
    xml.send(null)
}
getData();
function bind() {
    var str = '';
    for (var i = 0; i < data.length; i++) {
        var cur = data[i];
        str += '<tr>\
 <td>' + cur.name + '</td>\
 <td>' + cur.age + '</td>\
 <td>' + cur.score + '</td>\
 <td>' + cur.sex + '</td>\
 </tr>';
    }
    tbody.innerHTML = str;
}
bind();
function change() {
    for (var i = 0; i < tbodyRows.length; i++) {
        tbodyRows[i].className = 'bg' + i % 2;
    }
}
function sort(n) {
    for (var i = 0; i < tr.length; i++) {
        tr[i].flg = i == n ? tr[i].flg * -1 : -1;
    }
    var ary = utils.makeArray(tbodyRows);
    ary.sort(function (a, b) {
        a = a.cells[n].innerHTML;
        b = b.cells[n].innerHTML;
        if (isNaN(a) || isNaN((b))) {
            return a.localeCompare(b) * tr[n].flg;
        }
        return (a - b) * tr[n].flg;
    });
    var frg = document.createDocumentFragment();
    for (var i = 0; i < tr.length; i++) {
        frg.appendChild(ary[i]);

    }
    tbody.appendChild(frg);
    change();

}
for (var i = 0; i < tr.length; i++) {
    if (tr[i].className === 'cursor') {
        tr[i].第十期正式课 = i;
        tr[i].flg = -1;
        tr[i].onclick = function () {
            sort(this.第十期正式课)
        }
    }
}
