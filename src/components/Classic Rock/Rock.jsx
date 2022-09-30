import styles from './Rock.css';

export default function Rock() {
  return (
    <div>
      <h1>This is Rock</h1>

      <form className={styles.form}>
        <label>
          Rocker Name:
          <input name="name" placeholder="Your Rockstar Name" required />
        </label>

        <fieldset className={styles.radio}>
          <legend>Does this amp go to 11?</legend>
          <label>
            <input type="radio" name="amp" value="true" checked />
            True
          </label>
          <label>
            <input type="radio" name="amp" value="false" />
            False
          </label>
        </fieldset>

        <label>
          <p>Rock N Roll?</p>
          <select required>
            <option disabled selected value="">
              Select an option
            </option>
            <option value="1">HELL YEAH!</option>
            <option value="2">OH HELL YEAH!</option>
            <option value="3">OH HELLLLLLL YEAH!</option>
          </select>
        </label>

        <label className={styles.text}>
          How hard do you Rock N Roll?
          <textarea name="bio" placeholder="Do you 🤘 ?" required />
        </label>
        <input className={styles.submit} type="submit" value="Rock On!" />
      </form>

    </div>
  );
}
