
import React,{useState} from "react";

const Signup = ()=>{
    let  [name,setName]                    = useState("");
    let [nameError,setNameError]            = useState("");

    let [email,setEmail]                    =useState("");
    let [emailError,setEmailError]          = useState("");

    let [password,setPassword]              = useState("");
    let [passwordError,setPasswordError]    = useState("");

    let [confirmpassword, setConfirmPassword] = useState("");
    let [error,setError]                    = useState("");
    let [success,setSuccess]                = useState("");
     
    function nameChange(name){
     setName(name);
     if(name.trim() === ""){
        setNameError('name is required');
     }
     else if(!name.trim().includes(" ")){
        setNameError("Enter Full Name");
     }
     else{
        setName(name.trim());
        setNameError("");
     }
    }

    function emailhandler(email){
            setEmail(email)
            if(email.trim() === ""){
                setEmailError("Enter a Email Address")
            }
            else if ( !email.trim().includes("@gmail.com")){
                setEmailError("Email is not vaild");
            }
            else{
                setEmail(email.trim());
                setEmailError("");
            }
    }

    function passwordHandler(password){
      
        setPassword(password);
      
        let len = password.length;
        
        if(password.trim() === ""){
            setPasswordError("Enter a Password")
        }
        else if (len<8){
            setPasswordError("minimum 8 characters required");
        }
        else{
            setPassword(password);
            setPasswordError("");
        }
    }

    function submit(e){
           
        e.preventDefault();
          
            if(name === "" || email === "" || password === "" || confirmpassword === ""){
            nameChange(name);
            emailhandler(email);
            passwordHandler(password);
            setError("Error : All Feilds are Manditory");
                return;
            }

            else if (password!==confirmpassword){
                setError("password didn't match");
                return;
            }
            
            
            setSuccess("Successfully Signed Up!");
            setError("");
            // setName("");
            // setEmail("")
            // setPassword("");
            // setConfirmPassword("");

            setTimeout(() => {
                setSuccess("");
            }, 3000);
    }


    return (
        <div className="signup-container">
            <form>
                <h2>Signup</h2>
                <input type="text" placeholder="Full Name" value={name} onChange={(event)=>{nameChange(event.target.value)}}/>
                {
                    nameError && <div className="error">{nameError}</div>
                }
                <input type="email" placeholder="Email Address" value={email} onChange={(event)=>{emailhandler(event.target.value)}}/>
                {
                    emailError && <div className="error" >{emailError}</div>
                }
                <input type="password" placeholder="Password" value={password} onChange={(event)=>{passwordHandler(event.target.value)}}/>
                {
                    passwordError && <div className="error">{passwordError}</div>
                }
                <input type="password" placeholder="confirm password" value={confirmpassword} onChange={(event) => setConfirmPassword(event.target.value)}/>
                {
                    error && <div className="error">{error}</div>
                }
                {
                    success && <div className="success">{success}</div>
                }
                <button onClick={submit}>Submit</button>
            </form>
        </div>
    )
}

export default Signup;