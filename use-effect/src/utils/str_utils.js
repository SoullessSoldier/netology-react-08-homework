const capitalize = (inputStr) => {
    if (!inputStr || typeof inputStr !== "string") return "";
    return inputStr.replace(/^\w/, (c) => c.toUpperCase());
}

export {capitalize};