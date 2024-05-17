function looping(){
    var detailsloop={
        name:"shiva",
        qualification: "bachelors degree",
        department:"computer science",
    };
    for(let key in detailsloop){
        console.log(key ," : " ,detailsloop[key]);
    }
    }
    looping();