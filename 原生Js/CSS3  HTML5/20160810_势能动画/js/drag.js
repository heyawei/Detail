//->��ʼ��ʱ����֯IMG��ק��Ĭ����Ϊ:����Ĭ����ʽ�ǻ��IMGͼ�����Ӱ�����ƶ�
var imgList = document.getElementsByTagName("img");
for (var i = 0; i < imgList.length; i++) {
    on(imgList[i], "mousemove", function (e) {
        e.preventDefault();
    });
}

/*----------��ק------------*/
var oBox = document.getElementById("box"),
    oBox2 = document.getElementById("box2"),
    oBox3 = document.getElementById("box3"),
    winW = document.documentElement.clientWidth || document.body.clientWidth,
    winH = document.documentElement.clientHeight || document.body.clientHeight,
    boxW = oBox.offsetWidth,
    boxH = oBox.offsetHeight;

//->�����ĸ��߽�ֵ
var minL = 0,
    minT = 0,
    maxL = winW - boxW,
    maxT = winH - boxH,
    zIndex = 1;

//->�󶨷���
on(oBox, "mousedown", dragDown);
on(oBox2, "mousedown", dragDown);
on(oBox3, "mousedown", dragDown);
function dragDown(e) {
    //->this:oBox
    this["strX"] = e.clientX;
    this["strY"] = e.clientY;
    this["strT"] = this.offsetTop;
    this["strL"] = this.offsetLeft;

    //->������㶪ʧ���ⶼί�и�document,��Ҫ���THIS����
    this["MOVE"] = processThis(dragMove, this);
    this["UP"] = processThis(dragUp, this);
    on(document, "mousemove", this["MOVE"]);
    on(document, "mouseup", this["UP"]);

    //->��ס˭,˭������
    this.style.zIndex = ++zIndex;

    //->�����������
    window.clearInterval(this.flyTimer);
    window.clearInterval(this.dropTimer);
}

function dragMove(e) {
    //->this:oBox
    var curL = e.clientX - this["strX"] + this["strL"],
        curT = e.clientY - this["strY"] + this["strT"];
    curL = curL < minL ? minL : (curL > maxL ? maxL : curL);
    curT = curT < minT ? minT : (curT > maxT ? maxT : curT);
    this.style.left = curL + "px";
    this.style.top = curT + "px";

    //->����ˮƽ������ٶ�
    if (!this["prev"]) {
        this["prev"] = this.offsetLeft;
    } else {
        this["speedFly"] = this.offsetLeft - this["prev"];
        this["prev"] = this.offsetLeft;
    }
}

function dragUp(e) {
    //->this:oBox
    off(document, "mousemove", this["MOVE"]);
    off(document, "mouseup", this["UP"]);

    //->��ʼ����
    fly.call(this);
    drop.call(this);
}


/*-------ˮƽ������˶�--------*/
function fly() {
    //->this:oBox
    var _this = this,
        speedFly = _this["speedFly"];

    _this.flyTimer = window.setInterval(function () {
        //->this:window
        if (Math.abs(speedFly) < 0.5) {
            //->offsetLeft��ȡ�Ķ��Ǿ����������������,���ԼӼ�һ��С��0.5��ֵ��������Ľ�������κε�Ӱ��,��ʱ���ǾͿ��Խ���������
            window.clearInterval(_this.flyTimer);
            return;
        }
        speedFly *= 0.98;//->���ٶ�˥��
        var curL = _this.offsetLeft + speedFly;
        if (curL > maxL) {
            speedFly *= -1;
            _this.style.left = maxL + "px";
        } else if (curL < minL) {
            speedFly *= -1;
            _this.style.left = minL + "px";
        } else {
            _this.style.left = curL + "px";
        }
    }, 17);
}

/*-------��ֱ������˶�--------*/
function drop() {
    //->this:oBox
    var _this = this,
        speedDrop = 9.8,
        flag = 0;

    _this.dropTimer = window.setInterval(function () {
        if (flag > 1) {
            window.clearInterval(_this.dropTimer);
            return;
        }

        speedDrop *= 0.98;//->�����ٶȵ�˥��
        speedDrop += 10;//->���������ٶȼӿ�Ϳ��Ʒ����ٶȱ���
        var curT = _this.offsetTop + speedDrop;
        if (curT > maxT) {
            flag++;
            speedDrop *= -1;
            _this.style.top = maxT + "px";
        } else {
            flag = 0;
            _this.style.top = curT + "px";
        }
    }, 17);
}

/*
 mousemove�¼��������ƶ�һ��ͻᴥ��һ��,ÿ�����������һ����̵ķ�Ӧʱ��(���Ǽ���ȸ���10ms���ܷ�Ӧ����),��һ����̵ķ�Ӧʱ����,���Ǽ������ӵ�λ�÷����ƶ��˲Żᴥ��һ��mousemove�¼� ->�����ƶ��Ŀ�,�����Ĵ����� �ƶ�����,�����Ĵ�����
 */