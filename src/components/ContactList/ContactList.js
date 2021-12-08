import PropTypes from "prop-types";
import styles from './contactList.module.css';

function ContactList({ contacts, onDeleteContacts }) {
    return (
        <ul className={styles.list}>
            {contacts.map(({ id, name, number }) => (
                <li className={styles.item} key={id}>
                    <p className={styles.info}>
                        {name}: {number}
                    </p>
                    <button
                        className={styles.btn}
                        type="button"
                        onClick={() => onDeleteContacts(id)} />
                </li>
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
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;