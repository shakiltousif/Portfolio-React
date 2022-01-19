import React from "react";
import InputFields from "./InputFields";
import TextareaFields from "./TextareaFields";
export default class ContatForm extends React.Component {
    
    render(){
        return(
            <>
            
            <div className="contact-form w-100">
                <form className="contact-form" action="#">

                    <div className="form-floating">
                    
                        <InputFields types="text" placeholder="Name" inputId="floatingName" labelText="Name" />
                    
                    </div>
                    <div className="form-floating">

                        <InputFields types="email" placeholder="name@example.com" inputId="floatingInput" labelText="Email addres" />
                    
                    </div>
                    <div className="form-floating">

                        <TextareaFields placeholder="Leave a comment here" inputId="floatingTextarea2" labelText="Message" />

                    </div>
                    <div className="submit">
                        <button type="submit" className="btn">Send A Message</button>
                    </div>

                </form>
            </div>
            </>
        );
    }
       
}