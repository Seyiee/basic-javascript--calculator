function insert(exp){
    document.form.result.value +=exp;
}
function clearResult() {
    document.form.result.value = '';
}

function equals() {
    let problem = document.form.result.value;
    let solution = eval(problem);
    if (problem) {
        document.form.result.value = solution;
    }
}

function back() {
    let result = document.form.result.value;
    document.form.result.value = result.substring(0, result.length - 1);
    
}