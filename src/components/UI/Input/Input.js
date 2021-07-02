import classes from './Input.module.css';

const Import = (props) => {
    return (
        <div
            className={`${classes.control} ${props.isValid === false ? classes.invalid : ""
                }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type}
                id="email"
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
}

export default Import;