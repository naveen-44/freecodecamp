function rot13(str) {
  // String.fromCharCode(code);
  // str.charCodeAt(str.length-1);
  // A = 65, Z = 90
  var result = ''
  for (var i = 0;i < str.length;i++){
    var s = str[i];
    var val = -1;
    if (str.charCodeAt(i)<=90 && str.charCodeAt(i)>=65){
      val = str.charCodeAt(i)-13;
      if (val<65)val+=26;
    }
    if (val>0){
      s = String.fromCharCode(val);
    }
    result+=s;
  }
  console.log(result)
  return result;
}

rot13("SERR PBQR PNZC");
