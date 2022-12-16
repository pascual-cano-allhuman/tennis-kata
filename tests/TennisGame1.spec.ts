import { TennisGame1 } from "../src";
import { getAllScores, checkScore } from "./TennisGame.spec.utils";

const scores = getAllScores();

describe("TennisGame1", () => {
	scores.forEach(([player1Score, player2Score, expectedScore]) => {
		it(`scores ${player1Score}:${player2Score} as ${expectedScore}`, () => {
			checkScore(new TennisGame1("player1", "player2"), player1Score, player2Score, expectedScore);
		});
	});
});
