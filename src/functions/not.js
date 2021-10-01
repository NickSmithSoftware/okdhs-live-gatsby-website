const not = (value) => {
    
    // custom inversion functions

    if(value === "dark" || value === "light") return value === "dark" ? "light" : "dark";

    return null;
}

export default not;