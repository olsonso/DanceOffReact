import React from 'react';
import { isEqual, has, find } from "lodash/fp";

export const ACTIVE = "0";
export const THRILLER = "t";
export const DISCO = "d";
export const CHICKEN = "c";
export const BREAKDANCE = "b";
export const MOONWALK = "m";

export const NAMES = {
    [THRILLER]: "thriller",
    [DISCO]: "disco",
    [CHICKEN]: "chicken",
    [BREAKDANCE]: "breakdance",
    [MOONWALK]: "moonwalk",
};

const STRENGTHS = [
    [CHICKEN, DISCO],
    [DISCO, THRILLER],
    [THRILLER, BREAKDANCE],
    [BREAKDANCE, MOONWALK],
    [MOONWALK, CHICKEN],
    [CHICKEN, BREAKDANCE],
    [BREAKDANCE, DISCO],
    [DISCO, MOONWALK],
    [MOONWALK, THRILLER],
    [THRILLER, CHICKEN]
];

export function compare(a, b) {
    if (!has(a, NAMES)) {
        throw new Error(`Invalid move "${a}" for player 1`);
    }

    if (!has(b, NAMES)) {
        throw new Error(`Invalid move "${b}" for player 2`);
    }

    return Boolean(find(isEqual([a, b]), STRENGTHS));
}