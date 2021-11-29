import { getNewId } from "../../services/idService";
import styles from './RadioBoxInput.module.css';

export default function RadioBoxInput({
  labelDescription = 'Input description:',
  onInputChange = null,
  id = getNewId(),
  
}) {

  function handleInputChange({ currentTarget }){
    if(onInputChange){
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }

  return (
    <section>
      <header>
        <p>{labelDescription}</p>
      </header>
      <main className={styles.wrapper}>
        <div className={styles.radioboxAndLabel}>
            <input type="radio" 
            name="gender" 
            id={id} 
            onChange={handleInputChange} 
            value="Female"
            className={styles.radioboxItem}
            required />
            <label for="gender" className={styles.radioLabel}>Female</label>
        </div>      
        <div className={styles.radioboxAndLabel}>
            <input type="radio" 
            name="gender" 
            id={id} 
            onChange={handleInputChange} 
            value="Male"
            className={styles.radioboxItem}
            required />
            <label for="gender" className={styles.radioLabel}>Male</label>
        </div>      
        <div className={styles.radioboxAndLabel}>
            <input type="radio" 
            name="gender" 
            id={id} 
            onChange={handleInputChange} 
            value="Other"
            className={styles.radioboxItem}
            required />
            <label for="gender" className={styles.radioLabel}>Other</label>
        </div>      
        <div className={styles.radioboxAndLabel}>
            <input type="radio" 
            name="gender" 
            id={id} 
            onChange={handleInputChange} 
            value="Prefer not to respond"
            className={styles.radioboxItem}
            required />
            <label for="gender" className={styles.radioLabel}>Prefer not to respond</label>
        </div>     
      </main>       
    </section>
  )
}
