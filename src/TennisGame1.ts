import { TennisGame } from "./TennisGame";

export class TennisGame1 implements TennisGame {
	private m_score1: number = 0;
	private m_score2: number = 0;

	wonPoint(playerName: string): void {
		if (playerName === "player1") this.m_score1 += 1;
		else this.m_score2 += 1;
	}

	getScore(): string {
		if (this.m_score1 === this.m_score2) {
			return TennisGame1.getScoreWhenTie(this.m_score1);
		} else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
			return TennisGame1.getScoreForAdvantagesAndWins(this.m_score1, this.m_score2);
		} else {
			return TennisGame1.getScoresBelowDeuce(this.m_score1, this.m_score2);
		}
	}

	private static getScoresBelowDeuce(score1: number, score2: number) {
		let score: string = "";
		let tempScore: number = 0;
		for (let i = 1; i < 3; i++) {
			if (i === 1) tempScore = score1;
			else {
				score += "-";
				tempScore = score2;
			}
			score += TennisGame1.getPointsAsString(tempScore);
		}
		return score;
	}

	private static getScoreForAdvantagesAndWins(score1: number, score2: number) {
		const minusResult: number = score1 - score2;
		if (minusResult === 1) return "Advantage player1";
		else if (minusResult === -1) return "Advantage player2";
		else if (minusResult >= 2) return "Win for player1";
		else return "Win for player2";
	}

	private static getScoreWhenTie(points: number) {
		if (points > 2) return "Deuce";
		else return `${TennisGame1.getPointsAsString(points)}-All`;
	}

	private static getPointsAsString(points: number) {
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
	}
}
