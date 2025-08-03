function Pattern9(n) {
    // Upper pyramid
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            row += "*";
        }
        console.log(row);
    }

    // Lower inverted pyramid
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i - 1; j++) {
            row += " ";
        }
        for (let j = 1; j <= 2 * (n - i + 1) - 1; j++) {
            row += "*";
        }
        console.log(row);
    }
}

Pattern9(5);