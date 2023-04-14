const matchers = {
    canadianPostalCode: /^[A-Z]\d[A-Z] \d[A-Z]\d$/i,
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    masterCard: /^(?:5[1-5][0-9]{14}|2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9]{2}|7(?:[01][0-9]|20)))$/,
    adaFloat: /^(\d+\.\d*|\.\d+)([Ee][-+]?\d+)?$/,
    notThreeEndingInOO: /^(?!.*[A-Za-z]{3}oo$)[A-Za-z]+$/,
    divisibleBy16: /^(0|([01]+0{4,})|([01]*1[01]{3}[01]*))$/,
    eightThroughThirtyTwo: /^(?=.*\b(?:8|([1-2][0-9])|32)\b)[0-9]+$/,
    mLComment: /^\/\*[\s\S]*?\*\/$/,
    notPythonPycharmPyc: /^(?!.*python|pycharm|pyc$)[A-Za-z.]+$/,
    limitedFloatingPoint: /^([0-9]|[1-9][0-9]*)(\.[0-9]{0,2})?$/,
    palindrome2358: /^(.)((.)|(.)(.)\4|(.)(.)(.)?\7\6|(.)(.)(.)(.)?\11\10\9)?\1$/,
    noHyphenBeforeDigit: /(?<!-)[0-9]+/,
    ww:/^(.*)\1{1,}$/,
}
export default matchers;