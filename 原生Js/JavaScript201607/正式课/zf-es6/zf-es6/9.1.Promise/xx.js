function getStudentList () {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'http://localhost:3333/getStudentList',
      type: 'get',
      success: function (list) {
        resolve(list);
      },
      error: function (err) {
        reject(err);
      }
    })
  })
}

function getStudentInfo (studentId) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'http://localhost:3333/getStudentInfo',
      type: 'post',
      data: {
        studentId: studentId
      },
      success: function (studentInfo) {
        setTimeout(() => {
          resolve(studentInfo);
        }, 1000);
      },
      error: function (err) {
        reject(err);
      }
    })
  })
}

function getClassStudents (className) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'http://localhost:3333/getClassStudents',
      type: 'post',
      data: {
        'class': className
      },
      success: function (students) {
        setTimeout(() => {
          resolve(students);
        }, 500);
      },
      error: function (err) {
        reject(err);
      }
    })
  })
}


function getMyClassStudents (myName) {
  return new Promise((resolve, reject) => {
    getStudentList()
      .then((studentList) => {
        let selectStudent = studentList.find(function (item) {
          return item.name == myName;
        });
        return selectStudent.studentId;
      })
      .then((studentId) => {
        return getStudentInfo(studentId)
      })
      .then((studentInfo) => {
        return getClassStudents(studentInfo.class);
      })
      .then((students) => {
        //kkk+111
        resolve(students);
      })
      .catch((err) => {
        reject(err);
        //return Promise.reject(err)
      })
  });
}

getMyClassStudents('小明')
  .then((students) => {
    debugger;
    console.log(students);
  })
  .catch((err) => {
    debugger;
    console.log(err);
  });