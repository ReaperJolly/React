export function InputFormField(props) {
    return (
        <div className="input-form-field">
            <label>{props.label}</label>
            <input type={props.type} />
        </div>
    );
};