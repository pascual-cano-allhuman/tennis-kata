import { TennisGame } from "./TennisGame";

export class TennisGame1 implements TennisGame {
	private score1: number = 0;
	private score2: number = 0;

	wonPoint(playerName: string): void {
		if (playerName === "player1") this.score1 += 1;
		else this.score2 += 1;
	}

	getScore(): string {
		return getScore(this.score1, this.score2);
	}
}

const getScore = (score1: number, score2: number): string => {
	if (score1 === score2) {
		return getScoreWhenTie(score1);
	} else if (score1 >= 4 || score2 >= 4) {
		return getScoreForAdvantagesAndWins(score1, score2);
	} else {
		return getScoresBelowDeuce(score1, score2);
	}
};

const getScoresBelowDeuce = (score1: number, score2: number) => {
	return `${getPointsAsString(score1)}-${getPointsAsString(score2)}`;
};

const getScoreForAdvantagesAndWins = (score1: number, score2: number) => {
	const minusResult: number = score1 - score2;
	if (minusResult === 1) return "Advantage player1";
	else if (minusResult === -1) return "Advantage player2";
	else if (minusResult >= 2) return "Win for player1";
	else return "Win for player2";
};

const getScoreWhenTie = (points: number) => {
	if (points > 2) return "Deuce";
	else return `${getPointsAsString(points)}-All`;
};

const getPointsAsString = (points: number) => {
	switch (points) {
		case 0:
			return "Love";
		case 1:
			return "Fifteen";
		case 2:
			return "Thirty";
		case 3:
			return "Forty";
		default:
			return "";
	}
};
