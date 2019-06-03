var questions = ["q1", "q2", "q3", "q4", "q5"];
var score = 0;
count = 30;
var intervalId = setInterval(stopwatch.count, 1000);

$(submit).on("click", function(){
    for(var i = 0; i < questions.length; i++) {
        if($("input[name=" + questions[i] + "]:checked").val() === "correct") {
            score++;
        }
    }
    console.log(score);
    score = 0;
})