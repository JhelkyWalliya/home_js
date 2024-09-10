function changeToArrayOfObject(array2D) {
    var result = [];
    var tempObj = {};


    for (var i = 0; i < array2D.length; i++) {
        tempObj.name = array2D[i] [0];
        tempObj.type = array2D[i] [1];
        tempObj.price = array2D[i] [2];

        result.push (tempObj);
        tempObj = {};
        
    }

    return result;
}