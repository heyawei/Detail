function Banner(opt) {
    opt = opt || {};
    if (!opt.id) return;
    this.opt = {
        url: 'data.txt',
        id: 'tab'
    };
    this.oBox = document.getElementById(this.opt.id);
    this.tHead = this.oBox.getElementsByTagName('tHead')[0];
    this.aRows = this.tHead.rows[0];
    this.tCells = this.aRows.cells;
    this.tbody = this.oBox.tBodies[0];
    this.tbodyRows = this.tbody.rows;
    this.init();
}
Banner.prototype = {
    constructor: Banner,
    init: function () {
        var _this = this;
        this.getData();
        this.bind();
        this.changeColor();
        this.create();
    },
    getData: function () {
        var xml = new XMLHttpRequest;
        xml.open('get', this.opt.url + '?=' + Math.random(), false);
        xml.onreadystatechange = function () {
            if (xml.readyState === 4 && /^2\d{2}$/.test(xml.status)) {
                data = utils.jsonParse(xml.responseText);
            }
        };
        xml.send(null);
    },
    bind: function () {
        var str = '';
        for (var i = 0; i < data.length; i++) {
            var cur = data[i];
            if (cur.sex == 0) {
                cur.sex = '男';
            } else {
                cur.sex = '女';
            }
            str += '<tr>\
     <td>' + cur.name + '</td>\
     <td>' + cur.age + '</td>\
     <td>' + cur.score + '</td>\
     <td>' + cur.sex + '</td>\
     </tr>';
        }
        this.tbody.innerHTML = str;
    },
    /* bind: function () {
     var frg = document.createDocumentFragment();
     for (var i = 0; i < data.length; i++) {
     var cur = data[i];
     var tr = document.createElement('tr');
     for (var key in cur) {
     var td = document.createElement('td');
     if (key === 'sex') {
     cur[key] = cur[key] === 0 ? '男' : '女';
     }
     td.innerHTML = cur[key];
     tr.appendChild(td);
     }
     frg.appendChild(tr);
     }
     this.tbody.appendChild(frg);
     frg = null;
     },*/
    changeColor: function () {
        for (var i = 0; i < this.tbodyRows.length; i++) {
            this.tbodyRows[i].className = 'bg' + i % 2;
        }
    },
    sortflg: function (n) {
        var _this = this;
        for (var i = 0; i < this.tCells.length; i++) {
            this.tCells[i].flg = i == n ? this.tCells[i].flg * -1 : -1;
        }
        var ary = utils.makeArray(this.tbodyRows);
        ary.sort(function (a, b) {
            a = a.cells[n].innerHTML;
            b = b.cells[n].innerHTML;
            if (isNaN(a) || isNaN((b))) {
                return a.localeCompare(b) * _this.tCells[n].flg;
            }
            return (a - b) * _this.tCells[n].flg;
        });
        var frg = document.createDocumentFragment();
        for (var i = 0; i < this.tCells.length; i++) {
            frg.appendChild(ary[i]);
        }
        this.tbody.appendChild(frg);
        this.changeColor();
    },
    create: function () {
        for (var i = 0; i < this.tCells.length; i++) {
            var _this = this;
            if (this.tCells[i].className === 'cursor') {
                this.tCells[i].index = i;
                this.tCells[i].flg = -1;
                this.tCells[i].onclick = function () {
                    _this.sortflg(this.index)
                }
            }
        }
    }
};