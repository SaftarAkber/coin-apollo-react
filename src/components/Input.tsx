import './input.css'

interface InputInterface {
  value: string;
  type?: string;
  label?: string;
  name?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputInterface) => {
  return <label className="pure-material-textfield-outlined">
    <input name={props.name} value={props.value} onChange={props.handleChange} type={props.type} placeholder=" " />
    <span>{props.label}</span>
  </label>
}

export default Input;