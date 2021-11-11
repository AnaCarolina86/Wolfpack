import {
  AiOutlineEdit as EditIcon,
  AiOutlineDelete as DeleteIcon,
} from 'react-icons/ai';

import styles from './CardItem.module.css';

export default function CardItem({
  children: wolfCard,
  onDelete = null,
  onEdit = null,
}) {
  const { name, gender, birthday, created_at, updated_at } = wolfCard;

  function handleDeleteIconClick(){
    if(onDelete){
      onDelete(wolfCard.id);
    }
  }

  function handleEditIconClick(){
    if(onEdit){
      onEdit(wolfCard);
    }
  }

  return (
    <div className={styles.wolfCard}>
      <ul className={styles.wolfCardUnorderedList}>
        <li className={styles.wolfCardListItem}>
          <strong>Name:</strong> <span>{name}</span>
        </li>

        <li className={styles.wolfCardListItem}>
          <strong>Gender:</strong> <span>{gender}</span>
        </li>

        <li className={styles.wolfCardListItem}>
          <strong>Birthday:</strong> <span>{birthday}</span>
        </li>

        <li className={styles.wolfCardListItem}>
          <strong>Created at:</strong> <span>{created_at}</span>
        </li>

        <li className={styles.wolfCardListItem}>
          <strong>Updated at:</strong> <span>{updated_at}</span>
        </li>
      </ul>

      <nav className={styles.wolfCardIcons}>
        <EditIcon 
          onClick={handleEditIconClick}
          className={styles.wolfCardIcon}
          size={24}
        />
        <DeleteIcon 
          onClick={handleDeleteIconClick}
          className={styles.wolfCardIcon}
          size={24}
        />
      </nav>
      
    </div>
  );
}

