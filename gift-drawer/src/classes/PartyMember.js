export default class PartyMember{

    constructor(name) {
        this._name = name;
        this.drawnMemberName = "";
    }
    get name(){
        return this._name;
    }
}