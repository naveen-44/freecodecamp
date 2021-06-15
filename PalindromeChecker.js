function palindrome(str) {
  var str1 = '';
  var str2 = '';
  str = str.replace(/[^0-9a-z]/gi, '');
  str1 = str.toLowerCase();

  for(var i =0;i<str1.length;i++)
  if (str1[i]!=str1[str1.length - i - 1])
  return false;
  return true;
}
palindrome("eye");
