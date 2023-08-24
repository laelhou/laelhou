const whitelist=['187','12312']

export function getAccess(account){
  let arr = whitelist.filter(item => item == account);
  if (arr && arr.length > 0) {
    return true
  } else { 
    return false
  }
}