function solveEquation() {
    const eq = document.getElementById('equation').value;
    let result;

    try {
        result = eval(eq);
    } catch (error) {
        result = 'Invalid equation';
    }

    document.getElementById('result').innerText = result;
}