(function(){

    'use strict'
    console.log('reading js')
    let   select,prevselect;
    const interest = document.querySelector('.interests')
    const catimage = document.querySelector('#cat img')
    const catfig = document.querySelector('#cat figcaption')
    const bubble = document.querySelector('.bubble')
    const chair = document.querySelector('.chair')
    const shelf=document.querySelector('.shelf')
    const sofa = document.querySelector('.sofa')



    // bubble.addEventListener('mouseover',function(){
    //     bubble.style.border = '3px solid black'
    // })

    // bubble.addEventListener('mouseout',function(){
    //     bubble.style.removeProperty('border')
    // })

    bubble.addEventListener('click',function(){
        
        bubble.className = 'selected'
        chair.className = 'unselected'
        shelf.className = 'unselected'
        sofa.className = 'unselected' 

        prevselect = bubble
        interest.innerHTML = 'Biting Bubble Wrap'
        catfig.innerHTML = 'Popping and biting bubble wrap is my favorite activity! I love the crinkly sound and the way it feels in my mouth—especially when my human is unpacking packages.'
        catimage.src = 'images/catbubble.jpg'

    })

    chair.addEventListener('click',function(){

        bubble.className = 'unselected'
        chair.className = 'selected'
        shelf.className = 'unselected'
        sofa.className = 'unselected' 
        interest.innerHTML = 'Sitting on the chair'
        catfig.innerHTML = 'This chair is my personal grooming station! I sit here every day, carefully cleaning my fur to keep it soft and shiny—especially when my human is busy with work.'
        catimage.src = 'images/catchair.jpg'
    })

    shelf.addEventListener('click',function(){
        bubble.className = 'unselected'
        chair.className = 'unselected'
        shelf.className = 'selected'
        sofa.className = 'unselected' 
        interest.innerHTML = 'Climbing on the shelf'
        catfig.innerHTML = 'The Jellycat shelf is my personal playground! I love climbing up, inspecting every toy, and then casually knocking them off one by one—especially when my human is watching'
        catimage.src = 'images/catshelf.jpg'
    
    })

    sofa.addEventListener ('click',function(){
        bubble.className = 'unselected'
        chair.className = 'unselected'
        shelf.className = 'unselected'
        sofa.className = 'selected' 
        interest.innerHTML = 'Sleeping on the couch'
        catfig.innerHTML = 'This is my favorite place to sleep, I sleep on this couch 3-4 hours each day, especially when my mom is working on her assignments.'
        catimage.src = 'images/catsofa.jpg'
    })



})()