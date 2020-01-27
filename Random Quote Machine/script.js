let QuoteObject = {
    QuotesArray: [
        " “You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.” ",
        " “Get busy living or get busy dying.” ", 
        " “When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.” ",
        " “Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.” ",
        " “When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.” "
    ],

    NameArray: ["-Dr.Suess","-Stephen King","-Helen Keller","-Mark Twain","-Audre Lorde" ],
    randomNum: function () {
        return Math.floor(Math.random() * (5));
    }
};

window.onload = function () {
    
let buttonEvent = document.getElementById("Quote-button");
let quoteTag = document.getElementById("Quote-text");
let authorTag = document.getElementById("author-text");

buttonEvent.addEventListener("click",function(){
    let QuestionNum = QuoteObject.randomNum();
    quoteTag.innerHTML = (QuoteObject.QuotesArray[QuestionNum]);
    authorTag.innerHTML =(QuoteObject.NameArray[QuestionNum]);
});


}

// need to add social media functionality 