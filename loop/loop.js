
document.write(`<br>Q1: `)
for(var i=0; i<5 ; i++){
    document.write(`I love homework `);
}

document.write(`<br>Q2: `)

for(var i=0; i<5 ; i++){ 
    document.write(i +` `);
}

document.write(`<br>Q3: `)

for(var i=15; i<=30 ; i+=3){ 
    document.write(i +` `);
}

document.write(`<br>Q4: <br>`)

for(var i=0; i< 4 ; i++){ 
  for(var j=0; j< 4 ; j++){
    document.write(`⬜`);
  }
  document.write('<br>');
}

document.write(`<br>Q5: <br>`)

for(var i=0; i< 7 ; i++){ 
  for(var j=0; j< i+1 ; j++){
    document.write(`🦴`);
  }
  document.write('<br>');
}

document.write(`<br>Q6: <br>`)

for(var i=0; i< 7 ; i++){
  for(var z=6-i; z>0; z--){
    document.write(`~`);
  }  
  for(var j=0; j< i+1 ; j++){
    document.write(`🦴`);
  }
  document.write('<br>');
}

document.write(`<br>Q7: <br>`)

for(var z=0; z<6 ; z++){
    for(var i=0; i< z ; i++){ 
        for(var j=0; j< i+1 ; j++){
          document.write(`🦴`);
        }
        document.write('<br>');
      }
      document.write('<br>');

}

