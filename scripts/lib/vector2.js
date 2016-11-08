export function normalize(vector2) {
    var magnitude = Math.sqrt(vector2[0]*vector2[0] + vector2[1]*vector2[1]);
    return magnitude == 0 ? [0, 0] : [vector2[0] / magnitude, vector2[1] / magnitude];
}