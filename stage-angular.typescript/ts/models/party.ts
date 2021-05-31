import {Deputy} from './deputy';

export class Party {
    name: string;
    headrOfParty: Deputy;
    partyMembers: Array<Deputy>;


    constructor(name: string, headrOfParty: Deputy, partyMembers: Array<Deputy>) {
        this.name = name;
        this.headrOfParty = headrOfParty;
        this.partyMembers = partyMembers;
    }
}