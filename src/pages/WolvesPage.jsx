import React, { useEffect, useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from './WolvesPage.module.css';

import Header from "../components/Header/Header";
import CardItem from "../components/CardItem/CardItem";
import Button from "../components/Button/Button";
import CardForm from "../components/CardForm/CardForm";
import Main from "../components/Main/Main";
import Loading from '../components/Loading';
import Error from "../components/Error/Error";
import Footer from "../components/Footer/Footer";

import {
  apiGetAllCards, 
  apiDeleteCard,
  apiCreateCard,
  apiUpdateCard
} from '../services/apiService';

export default function WolvesPage() {
  //Backend
  const [allWolvesCards, setAllWolvesCards] = useState([]);

  const [createMode, setCreateMode] = useState(true);
  const [selectedWolfCard, setSelectedWolfCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {

    async function getAllCards(){
      try{
        const backEndAllCards = await apiGetAllCards();
        setAllWolvesCards(backEndAllCards);

        setTimeout(() => {
          setLoading(false);
        }, 500);

      } catch (error) {
        setError(error.message);
      }
    }
    getAllCards();
  }, []);

  async function handleDeleteCard(cardId){
    try{
      //Back-End
      await apiDeleteCard(cardId);

      //Front-End
      setAllWolvesCards(allWolvesCards.filter(card => card.id !== cardId));

      setError('');

    } catch(error){
      setError(error.message)
    }
  }

  function handleEditCard(card){
    setCreateMode(false);
    setSelectedWolfCard(card);
    setSelectedTab(1);
  }

  function handleNewCard(){
    setCreateMode(true);
    setSelectedWolfCard(null);
  }

  function handleTabSelect(tabIndex){
    setSelectedTab(tabIndex);
  }

  async function handlePersist(name, gender, birthday, created_at, updated_at){
    if(createMode){
      try{
        //Back-end
        const newWolfCard = await apiCreateCard(name, gender, birthday, created_at, updated_at);

        //Front-end
        setAllWolvesCards([...allWolvesCards, newWolfCard]);
        setError('');

      } catch(error){
        setError(error.message);
      }
    } else {
      try{
        //Back-end
        await apiUpdateCard(selectedWolfCard.id, name, gender, birthday, created_at, updated_at);

        //Front-end
        setAllWolvesCards(
          allWolvesCards.map(card => {
            if(card.id === selectedWolfCard.id){
              return {...card, name, gender, birthday, created_at, updated_at};
            }
            return card;
          })
        );

        setSelectedWolfCard(null);
        setCreateMode(true);
        setError('');
      } catch(error){
        setError(error.message);
      }
    }
  }

  let mainJsx = (
    <div>
      <Loading />
    </div>
  );

  if (error){
    mainJsx = <Error>{error}</Error>;
  }

  if(!loading && !error){
    mainJsx = (
      <>
        <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
          <TabList>
            <Tab>Wolves</Tab>
            <Tab>Create New Wolf</Tab>
          </TabList>

          <TabPanel>
            {allWolvesCards.map(card => {
              return(
                <CardItem 
                  key={card.id}
                  onDelete={handleDeleteCard}
                  onEdit={handleEditCard}
                >
                  {card}
                </CardItem>
              );
            })}
          </TabPanel>

          <TabPanel>
            <div className={styles.buttonAlign}>
              <Button onButtonClick={handleNewCard}>
                New Wolf Card
              </Button>
            </div>

            <CardForm createMode={createMode} onPersist={handlePersist}>
              {selectedWolfCard}
            </CardForm>
          </TabPanel>

        </Tabs>
      </>
    )
  }

  return (
    <>
      <Header>Wolves</Header>
      <Main>{mainJsx}</Main>
      <Footer />
    </>
  )
}
