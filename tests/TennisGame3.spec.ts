import { TennisGame3 } from "../src";
import { getAllScores, checkScore } from "./TennisGame.spec.utils";

const scores = getAllScores();

describe("TennisGame3", () => {
	scores.forEach(([player1Score, player2Score, expectedScore]) => {
		it(`scores ${player1Score}:${player2Score} as ${expectedScore}`, () => {
			checkScore(new TennisGame3("player1", "player2"), player1Score, player2Score, expectedScore);
		});
	});
});
