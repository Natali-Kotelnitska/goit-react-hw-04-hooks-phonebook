import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import s from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          name={name}
          number={number}
          key={id}
          id={id}
          onDelete={onDeleteContact}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};
