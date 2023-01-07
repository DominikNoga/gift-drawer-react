export default class EventObj{
    constructor(name,date, maxPrice = 0,members, id){
        this.name = name;
        this.date = date;
        this.maxPrice = maxPrice;
        this.members = members;
        this.membersToDraw = members;
        this.id = id;
    }
    updateMembersToDraw(randomMember){
        let i = 0;
        for(let member of this.membersToDraw){
            if(member === randomMember){
                this.membersToDraw = this.membersToDraw.slice(0,i)
                    .concat(this.membersToDraw.slice(i+1, this.membersToDraw.length));
                break
            }
            i++;
        }   
    }
    getRandomMember(currentUser){
        let randomMember;
        do {
            const randomIndex = Math.floor(Math.random()*this.membersToDraw.length);
            randomMember = this.membersToDraw[randomIndex];
        }while(randomMember.name === currentUser.name);
        
        return randomMember;
    }
    draw(currentUser){
        const index = this.members.indexOf(currentUser);
        if(this.membersToDraw.length === 0)
            return "No more members to draw";
        if(this.membersToDraw.length === 1 && this.membersToDraw[0].name === currentUser.name)
            return "No more members to draw";
        
        const randomMember = this.getRandomMember(currentUser);
        this.members[index].drawnMemberName = randomMember.name;
        this.updateMembersToDraw(randomMember);
        return randomMember.name
    }

}