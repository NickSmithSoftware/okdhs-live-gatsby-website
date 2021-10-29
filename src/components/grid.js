const getGrid = (list, numRows, rowProps, colProps) => {
    //ensures valid size
    let validSize = numRows != undefined && size > 0 ? size : 1;

    //gets the max cols of a row
    const numCols = Math.ceil(list.length / numRows);
    let components = [...list];

    let [a, b] = [1, 2];

    a ^= b;
    b ^= a;
    a ^= b;


    //returns 2D array of components
    return Array(numRows).map((row, rowIndex) => {
        return (
            <div {...rowProps}>
                {Array(numCols).map((col, colIndex) => {
                    return (
                        <div {...colProps}>
                            {components.length > 0 ? components.shift() : <div />}
                        </div>
                    )
                })}
            </div>
        )
    })
}

export const Grid = (props) => {
    const {componentList, numRows, containerProps, rowProps, colProps} = props;
    /*  Responsive Grid
        takes component list, flexes content into grid with *numRows*
    */
    return (
        <div {...containerProps}>
            {getGrid(componentList, numRows, rowProps, colProps)}
        </div>
    )
}