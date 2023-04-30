import style from './modal.module.css'

const Modal = ({children , save}) => {
  return (
    <div className={style['modal-bg']}>
        <div className={style.modal}>
            {children}
        </div>
    </div>
  )
}

export default Modal