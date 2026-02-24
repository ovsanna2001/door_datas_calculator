function calculate() {
    const a = parseFloat(document.getElementById('width').value);
    const b = parseFloat(document.getElementById('height').value);
    
    const widthError = document.getElementById('widthError');
    const heightError = document.getElementById('heightError');
    let hasError = false;

    if (isNaN(a) || a <= 0) {
        widthError.classList.add('show');
        hasError = true;
    } else {
        widthError.classList.remove('show');
    }

    if (isNaN(b) || b <= 0) {
        heightError.classList.add('show');
        hasError = true;
    } else {
        heightError.classList.remove('show');
    }

    if (hasError) {
        document.getElementById('results').classList.remove('show');
        return;
    }

    const chWidth = a - 8;
    const doorWidth = a - 13;
    const doorHeight = b - 9;
    const nWidth = a-12;
    const nHeight = b-8;

    // Թարմացնել վիզուալ դիվերը
    const innerBox1 = document.getElementById('innerBox1');
    const outerBox = document.getElementById('outerBox');
    const innerBox = document.getElementById('innerBox');
    
    // Հաշվել պիքսելների մասշտաբը (օրինակ՝ 1 սմ = 3 պիքսել)
    const scale = 3;
    const outerWidth = chWidth * scale;
    const innerWidth = doorWidth * scale;
    const innerHeight = doorHeight * scale;

    // Թարմացնել պիտակները
    document.getElementById('outerLabel').textContent = `${chWidth.toFixed(1)}`;
    document.getElementById('innerLabelWidth1').textContent = `${nWidth.toFixed(1)}`;
    document.getElementById('innerLabelHeight1').textContent = `${nHeight.toFixed(1)}`
    document.getElementById('innerLabelWidth').textContent = `${doorWidth.toFixed(1)}`;
    document.getElementById('innerLabelHeight').textContent = `${doorHeight.toFixed(1)}`;

    // Ցուցադրել արդյունքները
    document.getElementById('results').classList.add('show');
}

document.getElementById('width').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('height').focus();
    }
});

document.getElementById('height').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calculate();
    }
});
