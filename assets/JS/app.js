function GroupSelect(){
    var groupName = prompt('Enter your Group Name', '')
    var groupNumber = groupName.slice(-3,-2)
    
    

    if (groupNumber==1) {
        document.write(`Your Group Number is ${groupName.toUpperCase()} ${'<br>'} Morning Group`)
        document.body.style.backgroundColor = 'yellow'
        document.body.style.display = 'flex'
        document.body.style.alignItems='center'
        document.body.style.justifyContent= 'center'
        document.body.style.color = 'blue'
        document.body.style.fontSize = '50px'
        document.body.style.textAlign = 'center'
        
        
        
        
        
    }
    else if (groupNumber==2) {
        document.write(`Your Group Number is ${groupName.toUpperCase()} ${'<br>'} Afternoon Group`)
        document.body.style.backgroundColor = 'red'
        document.body.style.display = 'flex'
        document.body.style.alignItems='center'
        document.body.style.justifyContent= 'center'
        document.body.style.color = 'white'
        document.body.style.fontSize = '50px'
        document.body.style.textAlign = 'center'
        
    }
    else if (groupNumber==3) {
        document.write(`Your Group Number is ${groupName.toUpperCase()} ${'<br>'} Evening Group`)
        document.body.style.backgroundColor = 'black'
        document.body.style.display = 'flex'
        document.body.style.alignItems='center'
        document.body.style.justifyContent= 'center'
        document.body.style.color = 'white'
        document.body.style.fontSize = '50px'
        document.body.style.textAlign = 'center'
        
    }
}