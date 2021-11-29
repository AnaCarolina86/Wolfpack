import { getNewId } from '../../services/idService';
import styles from './TextInput.module.css';

export default function DateInput({
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

      {/* I know, this input needs improvement, change the date format to DD/MM/YY */}
      <input 
        autoFocus={autoFocus}
        id={id}
        type="datetime-local" 
        value={inputValue}
        onChange={handleInputChange}
        className={styles.textInput}
        required
      />      
    </div>
  )
}
