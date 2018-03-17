import React from "react";
import classnames from "classnames";
import { ACTIVE, ROCK, PAPER, SCISSORS, LIZARD, SPOCK } from "../game";

/**
 * Each move has a corresponding font awesome icon
 */
const icons = {
    [ROCK]: "./public/img/thriller.png",
    [PAPER]: "fa-hand-paper-o",
    [SCISSORS]: "fa-hand-scissors-o",
    [LIZARD]: "fa-hand-lizard-o",
    [SPOCK]: "fa-hand-spock-o",
    [ACTIVE]: "fa-question",
};

export default function Move({ move, className, ...props }) {
    return (
        <button
         className={classnames("button is-move-btn", className)}
         {...props}>
            <i className={classnames("fa fa-fw fa-2x", icons[move])} />
        </button>
    );
}