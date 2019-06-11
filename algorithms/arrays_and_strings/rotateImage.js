function rotateImage(a) {
    const n = a.length;
    for (let layer = 0; layer < n / 2; layer++) {
        let first = layer;
        let last = n - 1 - layer;
        for (let j = first; j < last; j++) {
            let offset = j - first;
            let temp = a[first][j];

            a[first][j] = a[last - offset][first];
            a[last - offset][first] = a[last][last - offset];
            a[last][last - offset] = a[j][last];
            a[j][last] = temp;
        }
    }
    return a
}