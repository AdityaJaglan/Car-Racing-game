class Form {
    constructor(){

    }
    display(){
        var title = createElement("h2")
        title.html("car Racing Game")
        title.position(132,0)
        var input=createInput("Name")
        var button=createButton("Play")
        var gretting=createElement("h3")
        input.position(130.160)
        button.position(250,200)
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value()
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)
            gretting.html("Hello "+name)
            gretting.position(130,160)
        })
    }
}































