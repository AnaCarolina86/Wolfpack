import React, { useEffect, useState } from 'react';
import TextInput from '../TextInput/TextInput';
import BirthdayInput from '../TextInput/BirthdayInput';
import DateInput from '../TextInput/DateInput';
import Button from '../Button/Button';
import Error from '../Error/Error';

import styles from './CardForm.module.css';

export default function CardForm({
  createMode = true,
  onPersist = null,
  children: wolfCard = null,
}) {
  const [name, setName] = useState(wolfCard?.name || '');
  const [gender, setGender] = useState(wolfCard?.gender || '');
  const [birthday, setBirthday] = useState(wolfCard?.birthday || '');
  const [createdAt, setCreatedAt] = useState(wolfCard?.created_at || '');
  const [updatedAt, setUpdatedAt] = useState(wolfCard?.updated_at || '');
  const [error, setError] = useState('');

  useEffect(() => {
    if(createMode){
      setName('');
      setGender('');
      setBirthday('');
      setCreatedAt('');
      setUpdatedAt('');
    }
  }, [createMode]);

  function handleNameChange(newName){
    setName(newName);
  }

  function handleGenderChange(newGender){
    setName(newGender);
  }

  function handleBirthdayChange(newBirthday){
    setName(newBirthday);
  }

  function handleCreateDayChange(newCreateDay){
    setName(newCreateDay);
  }

  function handleUpdateDayChange(newUpdateDay){
    setName(newUpdateDay);
  }

  function clearFields(){
    setName('');
    setGender('');
    setBirthday('');
    setCreatedAt('');
    setUpdatedAt('');
  }

  function validateForm(){
    return name !== '' && gender !== '' && birthday !== '';
  }

  function handleFormSubmit(event){
    event.preventDefault();

    if(validateForm()){
      setError('');
      if(onPersist){
        onPersist(name, gender, birthday, createdAt, updatedAt);
        clearFields();
      }
    } else{
      setError('Please fill all fields');
    }
  }

  function handleFormReset(){
    clearFields();
  }
  
  return (
    <form
      className={createMode ? styles.cardFormGreen : styles.cardFormYellow}
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
    >
      <h3>Update of the Wolf Card</h3>

      <TextInput 
        labelDescription="Name:"
        inputValue={name}
        onInputChange={handleNameChange}
        placeHolder="First Name"
      />

      <TextInput 
        labelDescription="Gender:"
        inputValue={gender}
        onInputChange={handleGenderChange}
        placeHolder="male, female, or other"
      />

      <BirthdayInput 
        labelDescription="Birthday:"
        inputValue={birthday}
        onInputChange={handleBirthdayChange}
      />

      <DateInput 
        labelDescription="Created at:"
        inputValue={createdAt}
        onInputChange={handleCreateDayChange}
      />

      <DateInput 
        labelDescription="Updated at:"
        inputValue={updatedAt}
        onInputChange={handleUpdateDayChange}
      />

      <div>
        {error.trim() !== '' ? <Error>{error}</Error> : <span>  </span>}

        <div>
          <Button colorClass="red" type="reset">
            Clean
          </Button>

          <Button colorClass="green" type="submit">
            Save
          </Button>
        </div>
      </div>      
    </form>
  );
}
