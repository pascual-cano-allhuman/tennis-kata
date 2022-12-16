import { TennisGame } from "./TennisGame";

export class TennisGame1 implements TennisGame {
	private score1: number = 0;
	private score2: number = 0;

	wonPoint(playerName: string): void {
		if (playerName === "player1") this.score1 += 1;
		else this.score2 += 1;
	}

	getScore(): string {
		let score: string = "";
		let tempScore: number = 0;
		if (this.score1 === this.score2) {
			return getScoreForDraw(this.score1);
		} else if (this.score1 >= 4 || this.score2 >= 4) {
			const minusResult: number = this.score1 - this.score2;
			if (minusResult === 1) score = "Advantage player1";
			else if (minusResult === -1) score = "Advantage player2";
			else if (minusResult >= 2) score = "Win for player1";
			else score = "Win for player2";
		} else {
			for (let i = 1; i < 3; i++) {
				if (i === 1) tempScore = this.score1;
				else {
					score += "-";
					tempScore = this.score2;
				}
				switch (tempScore) {
					case 0:
						score += "Love";
						break;
					case 1:
						score += "Fifteen";
						break;
					case 2:
						score += "Thirty";
						break;
					case 3:
						score += "Forty";
						break;
				}
			}
		}
		return score;
	}
}

const getScoreForDraw = (score: number) => {
	switch (score) {
		case 0:
			return "Love-All";
		case 1:
			return "Fifteen-All";
		case 2:
			return "Thirty-All";
		default:
			return "Deuce";
	}
};
