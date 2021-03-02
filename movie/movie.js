// var cars = ["Saab", "Volvo", "BMW"];




// document.write(cars+'<br>');
// var i
// for(i=0; i<3; i++)
// {
//     document.write(cars[i]);
//     document.write('<br>');
// }

var myImage = new Array();
myImage[0] = 'sky.jpg' ;
myImage[1] = 'https://movieposters2.com/images/1249016-b.jpg';
myImage[2] = 'https://m.media-amazon.com/images/I/610Wu2shPiL.jpg' ;
myImage[3] = 'https://i.pinimg.com/564x/87/1b/41/871b41c451071c034b43492798bd1cee.jpg' ;
myImage[4] = 'https://upload.wikimedia.org/wikipedia/en/d/d1/Cloudy_with_a_chance_of_meatballs_theataposter.jpg' ;
myImage[5] = 'https://i.pinimg.com/564x/c3/dc/78/c3dc78fdda46b1dd8e6b17d1d3076c30.jpg' ;

var myName = new Array();
myName[0] = 'sky' ;
myName[1] = 'Taitanic';
myName[2] = 'Jocker' ;
myName[3] = 'IT' ;
myName[4] = 'Cloudy with a Chance of Meatballs' ;
myName[5] = 'Busanhaeng ' ;

for(i=0; i<6; i++)
{
    var idName='.d'+i;
    var nameName='#p'+i;
    document.querySelector(idName).innerHTML = '<img src="'+myImage[i]+'">';
    document.querySelector(nameName).innerHTML = myName[i];
}

function add()
{
    var link=document.getElementById("link").value
    var title=document.getElementById("title").value
    myImage.pop();
    myName.pop();
    myImage.unshift(link);
    myName.unshift(title);
    for(i=0; i<6; i++)
    {
        var idName='.d'+i;
        var nameName='#p'+i;
        document.querySelector(idName).innerHTML = '<img src="'+myImage[i]+'">';
        document.querySelector(nameName).innerHTML = myName[i];
    }
}

// document.querySelector('.d0').innerHTML = '<img src="'+myImage[0]+'">';

// document.querySelector('#p').innerHTML = 'Sky';

// document.querySelector('#p1').innerHTML = 'image';



// var myImage = new Array();
// myImage[0] = new Image(100, 200);
// myImage[0].src = 'sky.jpg';
// document.body.appendChild(myImage[0]);
//document.querySelector('#x').innerHTML = '<img src="sky.jpg">';

// myImage[1].src = 'https://www.mail-signatures.com/wp-content/uploads/2019/02/How-to-find-direct-link-to-image_Blog-Picture.png';

// document.body.appendChild(myImage[1]);

