class Guideline{

 constructor(){

this.guideline = createElement('h4')
// in progress this.start = createButton('START PLAYING')

}

display(){

//message is to be made
this.guideline.html("yet to be made", 10,10)

this.start.mousePressed(()=>{

    //this.start.hide()
    //this.input.hide()
    //player.name= this.input.value()
    
    //playerCount += 1
    
    //player.index = playerCount
    
    //player.update()
    //player.updateCount(playerCount)
    
    //this.greeting.html("Lets Play "+ player.name)
    //this.greeting.position(displayWidth/2-70,displayHeight/4)
    
    this.guideline.hide()

    game.start()

    })
    

}



}