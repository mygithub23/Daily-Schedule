$(function() {
    let txtArea = document.querySelectorAll("textarea");
    let btnSave = document.querySelector("#save");
    let btnClear = document.querySelector("#clear");


    let d = new Date();

    
    //button to clear local storage and refresh the page
    $(".clear").click(function() {
    localStorage.clear();
    location.reload()
    });

    let year = d.getFullYear();
    let month = d.getMonth()+1;
    let day = d.getDate();
    let hour = d.getHours();

    let totalDays = new Date(year, month, 0).getDate()

    let output =
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day + '/' + year

    $('.date').text(`${output}`)


    function setDayColor() {
        for(i=0; i< txtArea.length; i++) {
            if (parseInt(txtArea[i].id, 10) > hour) {
                $(txtArea[i]).addClass("future");
            } else if (parseInt(txtArea[i].id, 10) < hour) {
                $(txtArea[i]).addClass("past");
            } else   $(txtArea[i]).addClass("present");      
        }
    }

    function UpdateFromLocalStorage() {
        for(i=0; i< txtArea.length; i++) {
            txtArea[i].value = localStorage.getItem(`${txtArea[i].id}`)
        }
    }
    UpdateFromLocalStorage();

    function saveToLocalStorage() {
        for(i=0; i< txtArea.length; i++) {
            localStorage.setItem(`${txtArea[i].id}`, txtArea[i].value);  
        }
    }


    setDayColor();

    btnSave.addEventListener('click', (e) => {
        saveToLocalStorage();
    })

    btnClear.addEventListener('click', (e) => {
        localStorage.clear();
        location.reload()
    })
    
 
      
 
  });

