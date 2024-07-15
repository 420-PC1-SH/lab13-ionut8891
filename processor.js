function processor(transmission) {
    if (!transmission.includes("::")) {
        throw new Error('Data is invalid ; should contain "::"');
    }
    let parts = transmission.split("::");
    let idPart= Number(parts[0]);
    let rawData = parts[1];
    validateRawData(rawData);
    if (isNaN(idPart)) {
        throw new Error('id is invalid; cannot be converted to Number');
    }

    return {
        id: idPart,
        rawData: rawData
    };
}

function validateRawData(rawData) {
    if (!rawData.startsWith("<") && !rawData.endsWith(">")) {
        throw new Error('rawData is invalid; should start with "<" and end with ">"');
    } else if (!rawData.startsWith("<")) {
        throw new Error('rawData is invalid; missing "<" at the beginning');
    } else if (!rawData.endsWith(">")) {
        throw new Error('rawData is invalid; missing ">" at the end');
    } else if (!/^\d+$/.test(rawData.slice(1, -1))) {
        throw new Error('rawData is invalid; should contain only digits between "<" and ">"');
    }
}

module.exports = processor;