const calenderItemTemplate = document.querySelector("#calender_template")
const monthNow = new Date();
const currentMonth = monthNow.getMonth();
const currentYear = monthNow.getFullYear();

const Modal = document.querySelector(".modal");
const addModalBootstrap = new bootstrap.Modal(Modal)
const confirmBtn = document.querySelector(".add-confirm")
const editBtn = document.querySelector(".edit-confirm")
const deletEBtn = document.querySelector(".delete-confirm")
let dateDataOut;
const containerLast = document.querySelector(".container.last");
const containerNow = document.querySelector(".container.now");
const containerNext = document.querySelector(".container.next");

window.addEventListener('load', () => {
    reloadrendering()
    
})
function nowMark() {
    const liAll = document.querySelectorAll('.c-block');
    // console.log(liAll)
    liAll.forEach((element) => {
        // console.log(element)
        if (element.dataset.year == monthNow.getFullYear() &&
            element.dataset.month == monthNow.getMonth() + 1 &&
            element.dataset.date == monthNow.getDate()) {
            element.style['background-color'] = 'rgb(220,254,254)'
        }

    }
    );

}


// .style['background-color']='#900'


//建立日曆
function Createcalender(container, month, year) {

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const datalist = LoadfromStorage()
    // 當月
    for (let j = 1; j <= 42; j++) {
        //處理日期格子
        const calenderItemEl = calenderItemTemplate.content.querySelector(".c-block")
            .cloneNode(true)
        calenderItemEl.classList.add(`block-${j}`)
        // console.log(calenderItemEl)
        const getdate = calenderItemEl.querySelector(".date");
        const datetime = new Date(year, month, j - firstDay);
        getdate.dataset.year = datetime.getFullYear();
        getdate.dataset.month = datetime.getMonth() + 1;
        getdate.dataset.date = datetime.getDate();
        getdate.textContent = datetime.getDate();
        calenderItemEl.dataset.year = datetime.getFullYear();
        calenderItemEl.dataset.month = datetime.getMonth() + 1
        calenderItemEl.dataset.date = datetime.getDate()
        //處理標籤

        datalist.map((data) => {
            if (parseInt(data.year) === parseInt(getdate.dataset.year) &&
                parseInt(data.month) === parseInt(getdate.dataset.month) &&
                parseInt(data.date) === parseInt(getdate.dataset.date)
            ) {

                data.todolist.sort((a, b) => {
                    return a.hour - b.hour
                }).sort((a, b) => {
                    if (a.AMPM === '上午' ) {
                        return -1;
                    }
                    if (a.AMPM === '下午' ) {
                        return 1;
                    }
                }).forEach(todothing => {
                    console.log(todothing)
                    const li = document.createElement("li");
                    li.classList.add("todo")
                    li.dataset.year = getdate.dataset.year;
                    li.dataset.month = getdate.dataset.month;
                    li.dataset.date = getdate.dataset.date
                    li.dataset.AMPM = todothing.AMPM

                    li.dataset.hour = todothing.hour;
                    li.dataset.minute = todothing.minute;
                    li.innerHTML = 
                    `${todothing.AMPM}  ${todothing.hour} ： ${todothing.minute}<br>
                    <span>${todothing.todo}</span>`
                    li.dataset.where = todothing.destination
                    li.setAttribute('data-bs-toggle', 'modal')
                    li.setAttribute('data-bs-target', '#staticBackdrop')
                    const rgbcolor = hexToRgb(todothing.tagColor, 0.3)
                    li.style['background-image'] = `linear-gradient(to right, ${todothing.tagColor} 7%, rgba(${rgbcolor.r},${rgbcolor.g},${rgbcolor.b},${rgbcolor.a}) 7%)`
                    calenderItemEl.querySelector(".todo-list").append(li);
                })
            }
        })

        container.querySelector(".calendar-body").append(calenderItemEl)
    }

}
function hexToRgb(hex, alpha) {
    //([a-f\d]{2})=>取0-9(/d)或a-f，取2個字
    //^#?=>開頭可以有#或不用
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        a: alpha
    } : null;
}
function confirmHandler() {
    const dateDataY = dateDataOut.year;
    const dateDataM = dateDataOut.month;
    const dateDataD = dateDataOut.date;
    getValue(dateDataY, dateDataM, dateDataD);

}

confirmBtn.addEventListener('click', (confirmHandler))


function getDate(e) {
    const button = e.relatedTarget;
    let dateData
    if (e.relatedTarget.classList.contains('add-event')) {
        Modal.querySelector('.add-confirm').classList.remove("d-none")
        Modal.querySelector('.edit-confirm').classList.add("d-none")
        Modal.querySelector('.delete-confirm').classList.add("d-none")
        dateData = button.parentElement.querySelector(".date");
        console.log(dateData)
    } else if (e.relatedTarget.classList.contains('todo')) {
        Modal.querySelector('.add-confirm').classList.add("d-none")
        Modal.querySelector('.edit-confirm').classList.remove("d-none")
        Modal.querySelector('.delete-confirm').classList.remove("d-none")
        dateData = button;
        deleditmodalview(dateData);
    }
    const dateDataY = dateData.dataset.year;
    const dateDataM = dateData.dataset.month;
    const dateDataD = dateData.dataset.date;
    const dateDataAMPM = dateData.dataset.AMPM;
    const dateDataHr = dateData.dataset.hour
    const dateDataMin = dateData.dataset.minute
    Modal.querySelector("h2").textContent = `${dateDataY}年${dateDataM}月${dateDataD}日`
    dateDataOut = {
        year: dateDataY,
        month: dateDataM,
        date: dateDataD,
        AMPM: dateDataAMPM,
        hour: dateDataHr,
        minute: dateDataMin
    }
    // console.log(dateDataOut)
}

function deleditmodalview(dateData) {
    Modal.querySelector('#AMPM').value = dateData.dataset.AMPM;
    Modal.querySelector("#hour").value = dateData.dataset.hour;
    Modal.querySelector('#minute').value = dateData.dataset.minute;
    Modal.querySelector('#whatToDo').value = dateData.querySelector('span').textContent
    Modal.querySelector('#where').value = dateData.dataset.where

}

//新增todo
Modal.addEventListener("shown.bs.modal", (e) => {
    console.log(e.relatedTarget)
    getDate(e)
})

function getValue(year, month, date) {

    //modal的資料
    const formatMonth = new Intl.NumberFormat('zh-tw', { minimumIntegerDigits: 2 }).format(month);
    const formatDate = new Intl.NumberFormat('zh-tw', { minimumIntegerDigits: 2 }).format(date);

    // console.log(`時間點:${modalAMPM}`)
    const hour = Number(Modal.querySelector("#hour").value);
    const formatHour = new Intl.NumberFormat('zh-tw', { minimumIntegerDigits: 2 }).format(hour);
    // console.log(`${formatHour}點`)
    const minute = Number(Modal.querySelector("#minute").value);
    const formatMinute = new Intl.NumberFormat('zh-tw', { minimumIntegerDigits: 2 }).format(minute);
    // console.log(`${formatMinute}分`);
    const todo = Modal.querySelector("#whatToDo").value;
    // console.log(`要記得做的事：${todo}`)
    const where = Modal.querySelector("#where").value;

    const tagColor = Modal.querySelector("#tagColor").value;
    // console.log(`標記顏色：${tagColor}`)
    const AMPM = Modal.querySelector("#AMPM").value

    if (!todo || !tagColor || !where || !AMPM) {
        window.alert("請輸入資料!")
        return;
    }
    if (0 > hour || hour > 12 || !Number.isInteger(hour)) {
        window.alert("請輸入12小時制時間")
        return;
    }
    if (0 > minute || minute > 60 || !Number.isInteger(minute)) {
        window.alert(`這個世界線的1小時只有60分鐘`)
        return
    } else if (minute == 60) {
        window.alert("60分鐘請進位")
        return
    }
    // if(0>minute )
    //建立物件

    let todoData = {
        id: `${year}${formatMonth}${formatDate}`,
        year: year,
        month: formatMonth,
        date: formatDate,
        todolist: [
            {
                AMPM: AMPM,
                hour: formatHour,
                minute: formatMinute,
                todo: todo,
                destination: where,
                tagColor: tagColor
            }
        ]
    };
    const LocalStorageData = LoadfromStorage();

    if (!checkDuplicateTime(todoData, LocalStorageData)) {
        return
    };
    if (LocalStorageData.some((local) => local.id === todoData.id)) {
        //日期篩選一樣
        const localSameDateData = LocalStorageData.find((local) => local.id === todoData.id);
        // console.log(localSameDateData)
        const todothingdata = todoData.todolist.find(x => x)
        localSameDateData.todolist.push(todothingdata)
        localSameDateData.todolist.sort((a, b) => {
            if (a.AMPM === '上午' ) {
                return -1;
            }
            if (a.AMPM === '下午' ) {
                return 1;
            }
    
        })
       
        updateLocalStorage(LocalStorageData);
    } else {
        LocalStorageData.push(todoData);
        updateLocalStorage(LocalStorageData);
    }
    reloadrendering()
    addModalBootstrap.hide();

}
//這裡要改
//如果有同日期就檢查，再來，如果有同時間就提出警告
function checkDuplicateTime(todoData, LocalStorageData) {
    if (LocalStorageData.some((local) => local.id === todoData.id)) {
        const local = LocalStorageData.find((local) => local.id === todoData.id)
        local.todolist.forEach(x=>{
            if(x.AMPM ===todoData.todolist.find((todo) => todo).AMPM && 
            x.hour ===todoData.todolist.find((todo) => todo).hour &&
            x.minute ===todoData.todolist.find((todo) => todo).minute
        ) {
            window.alert("同時間有其他事!")
            return false
        }
        })
        
    }

    return true
}
//從localstorage載入
function LoadfromStorage() {
    const localData = window.localStorage.getItem("todoList");
    if (!localData) {
        return []
    } else {
        return JSON.parse(localData)
    }
}
//更新localstora
function updateLocalStorage(LocalStorageData) {
    
    const JSONdata = JSON.stringify(LocalStorageData.sort((a, b) => a.id - b.id));
    window.localStorage.setItem("todoList", JSONdata);
    reloadrendering();
}

//重新更新畫面
function reloadrendering() {
    //清空表格
    containerLast.querySelector('.calendar-body').innerHTML = ""
    containerNow.querySelector('.calendar-body').innerHTML = ""
    containerNext.querySelector('.calendar-body').innerHTML = ""
    Createcalender(containerLast, currentMonth - 1, currentYear)
    Createcalender(containerNow, currentMonth, currentYear)
    Createcalender(containerNext, currentMonth + 1, currentYear)
    nowMark()
}
//edit跟delete modal

editBtn.addEventListener('click', editData);

function editData() {
    confirmHandler()
    deleteData()
    reloadrendering()
}
deletEBtn.addEventListener('click', deleteData);
function deleteData() {
    const oldData = dateDataOut;
    const localDataList = LoadfromStorage();

    const formatMonth = new Intl.NumberFormat('zh-tw', { minimumIntegerDigits: 2 }).format(dateDataOut.month);
    const formatDate = new Intl.NumberFormat('zh-tw', { minimumIntegerDigits: 2 }).format(dateDataOut.date);
    //找出舊資料，刪除
    const oldId = `${oldData.year}${formatMonth}${formatDate}`;
    const oldLocalDate = localDataList.find((localdata) => localdata.id === oldId)
    const oldLocalDateWithDataIndex = oldLocalDate.todolist.findIndex(x => x.AMPM === oldData.AMPM && x.hour === oldData.hour && x.minute === oldData.minute)
    oldLocalDate.todolist.splice(oldLocalDateWithDataIndex,1)
    if (oldLocalDate.todolist.length < 1) {
        const oldLocalDateidx = localDataList.indexOf(oldLocalDate)
        localDataList.splice(oldLocalDateidx, 1)
    }

    updateLocalStorage(localDataList)
    addModalBootstrap.hide();

    reloadrendering()
}


