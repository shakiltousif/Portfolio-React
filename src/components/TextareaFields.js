export default function TextareaFields(props){
    return(
        <>
            <textarea className="form-control" placeholder={props.placeholder} id={props.inputId} {...props}></textarea>
            <label htmlFor={props.inputId}>{props.labelText}</label>
        </>
    );
}