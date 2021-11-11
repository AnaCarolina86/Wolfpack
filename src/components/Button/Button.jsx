import styles from "./Button.module.css";

export default function Button({
  children: description = 'button description',
  onButtonClick = null,
  colorClass = "gray",
  type = 'button'
}) {

  function handleButtonClick(){
    if(onButtonClick){
      onButtonClick();
    }
  }

  return (
    <button
      className={styles.buttons}
      onClick={handleButtonClick}
      type={type}
    >
      {description}
    </button>
  )
}
