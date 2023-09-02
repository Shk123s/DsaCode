function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        // Check if the current plot is empty.
        if (flowerbed[i] === 0) {
            // Check if the left and right plots are empty.
            const emptyLeftPlot = (i === 0) || (flowerbed[i - 1] === 0);
            const emptyRightPlot = (i === flowerbed.length - 1) || (flowerbed[i + 1] === 0);
            
            // If both plots are empty, we can plant a flower here.
            if (emptyLeftPlot && emptyRightPlot) {
                flowerbed[i] = 1;
                count++;
            }
        }
    }
    return count >= n;
}
console.log(canPlaceFlowers(1));