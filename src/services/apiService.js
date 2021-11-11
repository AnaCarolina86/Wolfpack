import { read, exclude, create, edit } from './httpService';
import { getNewId } from './idService';

export async function apiGetAllCards(){
  const allCards = await read('/wolvescards');
  return allCards;
}

export async function apiDeleteCard(cardId){
  await exclude(`/wolvescards/${cardId}`);
}

export async function apiCreateCard(name, gender, birthday, created_at, updated_at){
  const newCard = create('/wolvescards', {
    id: getNewId(),
    name,
    gender,
    birthday,
    created_at,
    updated_at,
  });

  return newCard;
}

export async function apiUpdateCard(cardId, name, gender, birthday, created_at, updated_at){
  const updatedCard = edit(`/wolvescards/${cardId}`, {
    name,
    gender,
    birthday,
    created_at,
    updated_at,
  });

  return updatedCard;
}