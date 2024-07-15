function processor(transmission) {
    if (!transmission.includes("::")) {
        throw new Error('Data is invalid ; should contain "::"');
    }
    let parts = transmission.split("::");
    let rawData = parts[1];
    if (!rawData.startsWith("<") || !rawData.endsWith(">")) {
        throw new Error('rawData is invalid; should start with "<" and end with ">"');
    }
    return {
        id: Number(parts[0]),
        rawData: rawData
    };
}

module.exports = processor;