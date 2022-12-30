import { Member } from './Member';

// https://codeforces.com/apiHelp/objects#Party
export interface Party {
  contestId: number; //	Integer. Can be absent. Id of the contest, in which party is participating.
  members: Member[]; //	List of Member objects. Members of the party.
  participantType:
    | 'CONTESTANT'
    | 'PRACTICE'
    | 'VIRTUAL'
    | 'MANAGER'
    | 'OUT_OF_COMPETITION';
  teamId: number; // Integer. Can be absent. If party is a team, then it is a unique team id. Otherwise, this field is absent.
  teamName: string; // 	Localized. Can be absent. If party is a team or ghost, then it is a localized name of the team. Otherwise, it is absent.
  ghost: boolean; // If true then this party is a ghost. It participated in the contest, but not on Codeforces. For example, Andrew Stankevich Contests in Gym has ghosts of the participants from Petrozavodsk Training Camp.
  room: number; //	Integer. Can be absent. Room of the party. If absent, then the party has no room.
  startTimeSeconds: number; // Integer. Can be absent. Time, when this party started a contest.
}
