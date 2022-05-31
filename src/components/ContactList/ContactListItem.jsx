import PropTypes from 'prop-types';
import s from './ContactList.module.css';
export default function ContactListItem({ id, name, number, onDelete }) {
  return (
    <li className={s.contactsItem}>
      <p className={s.contactsText}>
        {name}: {number}
      </p>
      <button
        type="button"
        className={s.contactsBtn}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
}
ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};
