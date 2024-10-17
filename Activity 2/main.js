//write your JS code here:

const OPERATIONS = [
    {operation: "push", data: [[1, 2, 3], 4]},
    {operation: "+", data: [1, 2, 3]},
    {operation: "+", data: [3]},
    {operation: "*", data: [2, 3]},
    {operation: "filter", data: [[1, 2, 3], 3]},
    {operation: "merge", data: [[1, 2, 3], [4, 5], [6], [7]]},
];

function opSum(data){
    let result = 0;
    for(let i = 0; i < data.length; i++){
        result += data[i];
    }
    return result;
}

//forEach

function opSum(data) {

    let sum = 0;

    data.forEach(e => sum += e)

    return sum;
}

//reduce

function opMul(data){
    return data.reduce(
        (acc, curr)=> acc * curr, 1);
}

function opMul(data){
    let result = 0;
    for(let i = 0; i < data.length; i++){
        result *= data[i];
    }
    return result;
}

function opPush(data){
    let add = data[1];

    data.forEach.push(add);
}

//reduce

function opPush(data){
    return data.reduce([1, 2,])
}

function opPush(data){
    let [_, ...rest] = data; //la barra baja toma el primer elemento del array y lo ignora, ...rest señala al resto del array
    return [...first, ...rest];
}

function opMerge(data){
    return [].concat(...data); //...nombredelarray es igual a el contenido del array
}

function opFilter(data){
    return opMerge(data);
}

function batchProcessing(operations){
    for(let i = 0; i < operations.length; i++){
        const op = operations[i];
        switch(op.operation){
            case "+":
                opSum(op.data);
                break;
            case "*":
                opMul(op.data);
                break;
            case "push":
                opPush(op.data);
                break;
            case "filter":
                opFilter(op.data);
                break;
            case "merge":
                opMerge(op.data);
                break;
            //default:
        }
    }
    
    operations.forEach()        
    
}