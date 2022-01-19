export default function InputFields(props){
    return(
        <>
            <input type={props.types} className="form-control" placeholder={props.placeholder} id={props.inputId} {...props}/>
            <label htmlFor={props.inputId}>{props.labelText}</label>
        </>
    );
}