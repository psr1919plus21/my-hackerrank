// 07:05:45PM
const timeData = '12:40:22AM';

console.log(timeConversion(timeData));

function timeConversion(data) {
    let result = '';
    const timeFactor = data.slice(-2);
    const timeDigits = data.slice(0, -2);
    let timeSections;

    switch (timeFactor) {
        case 'AM':
            timeSections = timeDigits.split(':');
            timeSections[0] = timeSections[0] === '12' ? '00' : timeSections[0];
            result = timeSections.join(':');
            break;
        case 'PM':
            timeSections = timeDigits.split(':');
            timeSections[0] = parseInt(timeSections[0], 10);
            timeSections[0] = timeSections[0] === 12 ? timeSections[0] : timeSections[0] + 12;
            result = timeSections.join(':');
            break;
        default:
            console.warn(`Invalid timeFactor value: ${timeFactor}`);
    }


    return result;
}