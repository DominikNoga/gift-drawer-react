import { useState } from "react";

function MemberInput(props) {
  const [members, setMembers] = useState(props.members)
  const i = props.index;
  return (
    <li className="members__item">
        <input 
          type="text" 
          className="memberName"
          required 
          placeholder="Participant name..."
          value={members[i]}
          onChange={(e) =>{
            members[i] = e.target.value;
            setMembers(members)
          }}
        />
    </li>
  )
}

export default MemberInput
