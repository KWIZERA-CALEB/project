export interface Challenge {
    _id: string;
    status: 'open' | 'closed' | 'ongoing';
    challengeTitle: string;
    challengeDeadline: string;
    challengeDuration: string;
    moneyPrize: string;
    contactEmail: string;
    projectDescription: string;
    projectBrief: string;
    projectDescriptionTasks: string;
    createdAt: string;
}

export interface ChallengeFormData {
    status: 'open' | 'closed' | 'ongoing';
    challengeTitle: string;
    challengeDeadline: string;
    challengeDuration: string;
    moneyPrize: string;
    contactEmail: string;
    projectDescription: string;
    projectBrief: string;
    projectDescriptionTasks: string;
}
  