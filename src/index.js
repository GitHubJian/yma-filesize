const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
const nums = [
    Math.pow(1024, 0),
    Math.pow(1024, 1),
    Math.pow(1024, 2),
    Math.pow(1024, 3),
    Math.pow(1024, 4),
    Math.pow(1024, 5),
    Math.pow(1024, 6),
    Math.pow(1024, 7),
    Math.pow(1024, 8),
];

function filesize(bytes) {
    if (typeof bytes !== 'number') {
        new Error('bytes is not a number');
    }

    let res = `${bytes} B`;
    for (let i = 0; i < units.length; i++) {
        const minSize = nums[i];
        if (bytes > minSize) {
            res = parseFloat((bytes / minSize).toFixed(2)) + ' ' + units[i];
        } else {
            break;
        }
    }

    return res;
}

module.exports = filesize;
