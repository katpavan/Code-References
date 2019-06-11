function toLowerCase(str) {
    var result = "";
    for (let i in str) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) < 91) {
            result += String.fromCharCode((str.charCodeAt(i) + 32));
        } else {
            result += str[i];
        }
    }
    return result;
}