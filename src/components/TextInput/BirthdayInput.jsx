import { getNewId } from "../../services/idService";
import styles from './TextInput.module.css';

export default function BirthdayInput({
  labelDescription = 'Input description:',
  inputValue = 'Input default value',
  onInputChange = null,
  id = getNewId(),
  autoFocus = false,
}) {

  function handleInputChange({ currentTarget }){
    if(onInputChange){
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }

  return (
    <div>
      <label htmlFor={id}>
        {labelDescription}
      </label>

      <input 
        autoFocus={autoFocus}
        id={id}
        type="date"
        value={inputValue}
        onChange={handleInputChange}
        className={styles.textInput}
        min="1901-01-01"
        max="2011-01-01"
        required
      />
    </div>
  )
}
