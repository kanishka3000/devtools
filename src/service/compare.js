const compare = function (left = '', right = ''){
    const comLeft = left.split('\n');
    const comRight = right.split('\n');

    return {
        leftOnly: comLeft.filter(ele => !comRight.includes(ele)),
        rightOnly: comRight.filter(ele => !comLeft.includes(ele))
    }
}

export default compare;