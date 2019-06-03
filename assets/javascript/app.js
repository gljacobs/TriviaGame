var questions = ["q1", "q2", "q3", "q4", "q5"];
var score = 0;
var time = 30;

var countDown = function(){
    if(time > 0){
        time--;
        $("#time").text("Time remaining... " + time + " seconds");
    }
    else {
        time = 30;
        $("#time").text("Time remaining... " + time + " seconds");
        score = 0;
        for(var i = 0; i < questions.length; i++) {
            $("input[name=" + questions[i] + "]:checked").prop("checked", false);
        }
    }
}
var intervalId = setInterval(countDown, 1000);


$(submit).on("click", function(){
    for(var i = 0; i < questions.length; i++) {
        if($("input[name=" + questions[i] + "]:checked").val() === "correct") {
            score++;
        }
    }
    time = 30;
    $("#time").text("Time remaining... " + time + " seconds");
    console.log(score);
    score = 0;
    for(var i = 0; i < questions.length; i++) {
        $("input[name=" + questions[i] + "]:checked").prop("checked", false);
    }
})