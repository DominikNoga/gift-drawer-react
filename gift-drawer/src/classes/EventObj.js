export default class EventObj{

    constructor(name,date, maxPrice = 0,members){
        this._name = name;
        this._date = date;
        this._maxPrice = maxPrice;
        this._members = members;
        this.membersToDraw = members;
        this._id = Date.now();
    }
    
    get name() { return this._name; }
    get date() { return this._date;}
    get maxPrice() { return this._maxPrice}
    get members() { return this._members}
    get id(){ return this._id}
    set name(name) { this._name = name;}
    set date(date) { this._date = date};
    set maxPrice (maxPrice) { this._maxPrice = maxPrice};
    draw(currentUser){
        let randomMember;
        if(this.membersToDraw.length < 1)
            return "No more members to draw";
        if(this.membersToDraw.length === 1 && this.membersToDraw[0].name === currentUser)
            return "No more members to draw";
        
        do {
            const randomIndex = Math.floor(Math.random()*this.membersToDraw.length);
            randomMember = this.membersToDraw[randomIndex];
        }while(randomMember._name === currentUser);
        
        let i =0;
        for(let member of this.membersToDraw){
            if(member === randomMember){
                this.membersToDraw = this.membersToDraw.slice(0,i)
                    .concat(this.membersToDraw.slice(i+1, this.membersToDraw.length));
                break
            }
            i++;
        }   
        return randomMember.name
    }

}