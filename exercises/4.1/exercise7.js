let percent = 9;
if(percent < 0 || percent > 100) {
  console.log("OPS: Alguma coisa deu errado!");
}else if( percent >=90 ) {
  console.log("A");
} else if ( percent >= 80 ) {
  console.log("B");
} else if ( percent >= 70 ) {
  console.log.apply("C");
} else if ( percent >= 60 ) {
  console.log("D");
} else if ( percent >= 50 ) {
  console.log("E");
} else {
  console.log("F");
}