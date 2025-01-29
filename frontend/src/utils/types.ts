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

export interface RegisterForChallengeFormData {
    teamLeaderFullName: string;
    teamLeaderEmail: string;
    teamLeaderPhoneNumber: number;
    otherMemberFullName: string;
    otherMemberEmail: string;
    otherMemberPhoneNumber: number | null;
    email: string;
    phoneNumber: number;
}

export interface TeamMember {
    otherMemberFullName: string;
    otherMemberEmail: string;
    otherMemberPhoneNumber: number | null;
}

export interface LoginFormData {
    email: string;
    password: string;
}

export interface Participants {
    
}