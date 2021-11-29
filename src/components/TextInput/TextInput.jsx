import { getNewId } from '../../services/idService';
import styles from './TextInput.module.css';

export default function TextInput({
  labelDescription = 'Input description:',
  placeHolder = 'placeholder',
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
    <section>
      <label htmlFor={id}>
        {labelDescription}
      </label>

      <input 
        className={styles.textInput}
        autoFocus={autoFocus}
        id={id}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeHolder}
        required
      />      
    </section>
  );
}

