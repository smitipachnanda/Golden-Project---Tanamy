class Form{

constructor(){

 this.input = createInput('name')   
 this.button = createButton('PLAY')
 this.greeting = createElement('h2')
 this.title = createElement('h2')
 this.reset = createButton('Reset') 
}

hideform(){

this.button.hide()
this.input.hide()
this.greeting.hide()
this.title.hide()

}

display(){

this.title.html("runner")
this.title.position(displayWidth/2-30,10)

this.input.position(displayWidth/2-40,displayHeight/2-80)

this.button.position(displayWidth/2+30,displayHeight/2)

this.reset.position(displayWidth-100,20)


this.button.mousePressed(()=>{

this.button.hide()
this.input.hide()

player.name = this.input.value()

playerCount += 1

player.index = playerCount

player.update()
player.updateCount(playerCount)

//guideline = new Guideline()

//guideline.display()

//this.greeting.html("Lets Play "+ player.name)
//this.greeting.position(displayWidth/2-70,displayHeight/4)

})

this.reset.mousePressed(()=>{

player.updateCount(0)
game.update(0)

database.ref('/').update
({player:null})

}
)


}

}