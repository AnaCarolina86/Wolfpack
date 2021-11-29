import React, { useEffect, useState } from 'react';
import TextInput from '../Inputs/TextInput';
import BirthdayInput from '../Inputs/BirthdayInput';
import DateInput from '../Inputs/DateInput';
import Button from '../Button/Button';
import RadioBoxInput from '../Inputs/RadioBoxInput';
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
    setGender(newGender);
  }

  function handleBirthdayChange(newBirthday){
    setBirthday(newBirthday);
  }

  function handleCreateDayChange(newCreateDay){
    setCreatedAt(newCreateDay);
  }

  function handleUpdateDayChange(newUpdateDay){
    setUpdatedAt(newUpdateDay);
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

      <RadioBoxInput 
        labelDescription="Gender:"
        onInputChange={handleGenderChange}       
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
