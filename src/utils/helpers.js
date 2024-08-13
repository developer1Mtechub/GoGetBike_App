export const getEmojiFlag = (countryCode) => {
    if (!countryCode) return null;
    const codePoints = countryCode.toUpperCase().split('').map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
};