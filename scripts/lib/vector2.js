export function magnitude(vector2) {
    return Math.sqrt(vector2[0]*vector2[0] + vector2[1]*vector2[1]);
}

export function normalize(vector2) {
    var mag = magnitude(vector2);
    return mag == 0 ? [0, 0] : [vector2[0] / mag, vector2[1] / mag];
}