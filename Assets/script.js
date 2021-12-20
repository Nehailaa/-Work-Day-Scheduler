let storedBtn = $(".saveBtn");

$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

function tempsColors() {
    let hourColor = moment().hours();

    $(".time-block").each(function () {
        let presentHour = parseInt($(this).attr("id"));
        if (presentHour > hourColor) {
            $(this).addClass("future");
        } else if (presentHour === hourColor) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

storedBtn.on("click", function () {

    let temps = $(this).siblings(".hour").text();
    let backgroundPlan = $(this).siblings(".plan").val();
    localStorage.setItem(temps, backgroundPlan);
});

function plannerStorage() {
    $(".hour").each(function () {
        let presentHour = $(this).text();
        let presentPlaner = localStorage.getItem(presentHour);
        if (presentPlaner !== null) {
            $(this).siblings(".plan").val(presentPlaner);
        }
    });
}



tempsColors();
plannerStorage();




