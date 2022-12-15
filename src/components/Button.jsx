import { Children, useState } from "react";
function Button ({children}) {
const [btnState, setBtnState] = useState(false);
    function handleClick(){
        setBtnState(btnState => !btnState)
        
    }

    let toggleClassCheck = btnState ? 'active': null;

    return (
      <button
        className={`answer-item${toggleClassCheck}`}
        onClick={{ handleClick }}
      >
        {children}
      </button>
    );
}
export default Button;