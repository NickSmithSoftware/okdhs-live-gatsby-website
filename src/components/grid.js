import overwrite from "../functions/overwrite";

//default props respectively
const [defaultContainerProps, defaultRowProps, defaultColProps] = [
    {
        className: "container-fluid"
    },
    {
        className: "row"
    },
    {
        className: "col"
    }
];

const getGrid = (list, numRows, rowProps, colProps) => {
    //ensures valid size
    let validSize = numRows != undefined && size > 0 ? size : 1;

    //gets the max cols of a row
    const numCols = Math.ceil(list.length / numRows);
    let components = [...list];

    //returns 2D array of components
    return Array(numRows).map((row, rowIndex) => {
        return (
            <div {...overwrite(defaultRowProps, rowProps)}>
                {Array(numCols).map((col, colIndex) => {
                    return (
                        <div {...overwrite(defaultColProps, colProps)}>
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
        <div {...overwrite(defaultContainerProps, containerProps)}>
            {getGrid(componentList, numRows, rowProps, colProps)}
        </div>
    )
}