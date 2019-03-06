const hikes = [
    'DU',
    'UD',
    'UUDDDDUUUD'
];

hikes.forEach(function(hike) {
    console.log(countingValleys(hike.length, hike));
});


function countingValleys(hikeLength, hikeTopography) {
    let mode = null;
    let uphillSteps = 0;
    let downhillSteps = 0;
    let montainsCount = 0;
    let valleysCount = 0;

    for (let i = 0; i < hikeTopography.length; i++) {
        let currentStep = hikeTopography[i];

        if (!mode) {
            if (currentStep === 'U') {
                mode = 'montain';
            } 
    
            if (currentStep === 'D') {
                mode = 'valley';
            }
        }

        switch(mode) {
            case 'montain':
                // формируем гору
                if (currentStep === 'U') {
                    uphillSteps++;
                } else {
                    downhillSteps++;

                    if (uphillSteps === downhillSteps) {
                        mode = null;
                        montainsCount++;
                    }
                }
                break;
            case 'valley':
                // формируем долину
                if (currentStep === 'D') {
                    downhillSteps++;
                } else {
                    uphillSteps++;
                    if (uphillSteps === downhillSteps) {
                        mode = null;
                        valleysCount++;
                    }
                }
                break;
        }
    }
    
    return valleysCount;
}