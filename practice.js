const matchers = {
    canadianPostalCode: /^[A-Z]\d[A-Z] \d[A-Z]\d$/i,
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    masterCard: /^(?:5[1-5]\d{14}|2(?:[3-6]\d{14}|2[3-9]\d{13}|22[1-9]\d{12}|7[0-1]\d{13}|720\d{12}))$/,
    adaFloat: /^(((\d([\d_]\d)*)+(\.(\d([\d_]\d)*)+)?)|(((\d([\d_]\d)*)+#[\da-fA-F_]+#|[\da-fA-F_]+#)([\da-fA-F_]*\.[\da-fA-F_]+#|#[\da-fA-F_]+)?))([eE][+-]?(\d([\d_]\d)*)+)?$/,
    notThreeEndingInOO: /^(?!.([o]|[O]){2}$)[A-Za-z]*$/,
    divisibleBy16: /^([01]*0{4,}|[0]*)$/,
    eightThroughThirtyTwo: /^(8|9|([1-2][0-9])|3[0-2])$/,
    mLComment: /^(\(\*([^\)]*|[^\(]*)?\*\))$/,
    notPythonPycharmPyc: /^(?!(python|pycharm|pyc)$).*$/,
    limitedFloatingPoint: /^([0-9]+)(\.[0-9]*)?(([e]|[E])([-]|[+])?[0-9]{0,3})?$/,
    palindrome2358: /^(.)((.)|(.)(.)\4|(.)(.)(.)?\7\6|(.)(.)(.)(.)?\11\10\9)?\1$/,
    noHyphenBeforeDigit: /(?<!-)[0-9]+/,
    ww:/^(.*)\1{1,}$/,
}
export default matchers;