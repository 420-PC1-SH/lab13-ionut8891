function processor(transmission) {
    if (!transmission.includes("::")) {
        throw new Error('Data is invalid ; should contain "::"');
    }
    let parts = transmission.split("::");
    let idPart= Number(parts[0]);
    let rawData = parts[1];

    if (isNaN(idPart)) {
        throw new Error('id is invalid; cannot be converted to Number');
    }
    if (!rawData.startsWith("<") || !rawData.endsWith(">")) {
        throw new Error('rawData is invalid; should start with "<" and end with ">"');
    }
    return {
        id: idPart,
        rawData: rawData
    };
}

module.exports = processor;