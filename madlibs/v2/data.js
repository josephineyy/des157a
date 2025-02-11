(function(){
    "use strict"
    console.log("reading js")
    const name = document.querySelector('#name');
    const num = document.querySelector('#number');
    const place = document.querySelector('#place')
    const adj = document.querySelector('#adjective')
    const food = document.querySelector('#food2')
    const fruit = document.querySelector('#fruit');
    const vegie = document.querySelector('#vegetable')
    const noun = document.querySelector('#noun')
    const verb = document.querySelector('#verb')
    const duration = document.querySelector('#duration')

    document.querySelector('form').addEventListener('submit',function(event){
        event.preventDefault();
        document.querySelector('h1').innerHTML = 'My Brunch Experience'
        document.querySelector('.madlib').innerHTML = `<p>Today, I went to ${place.value} for brunch, and it was ${adj.value}! I ordered ${food.value} with ${vegie.value} on the side, and a cup of ${fruit.value} juice. It tasted ${adj.value} and was around ${num.value} calories, which made me feel ${adj.value} and ready to ${verb.value} for the rest of the day.I accidentally knocked over ${noun.value} on the table, and the waiter kindly helped me clean it up. I said, “Thank you, you’re so ${adj.value}!” To show my appreciation, I left an extra ${num.value} dollars in tips. When I went to pay, I ran into ${name.value} who had just entered the restaurant. I was so ${adj.value}—we hadn’t seen each other for ${duration.value}! Such a wonderful experience!.</p>`
        document.querySelector('form').className = 'hidden'
    })

        place.value.className = "special"
    

})()