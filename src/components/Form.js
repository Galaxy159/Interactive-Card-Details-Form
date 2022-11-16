export default function Form() {
  return (
    <>
      <form className="form">
        <div className="form__name">
          <label htmlFor="name" className="form__name--label">
            Cardholder Name
          </label>
          <input
            type="text"
            id="name"
            className="form__name--input"
            placeholder="e.g. Jane Appleseed"
          />
          <p className="form__error">Can't be blank</p>
        </div>
        <div className="form__number">
          <label htmlFor="number" className="form__number--label">
            Card Number
          </label>
          <input
            type="text"
            id="number"
            className="form__number--input"
            placeholder="e.g. 1234 5678 9123 0000"
          />
          <p className="form__error">Can't be blank</p>
        </div>
        <div className="form__expiration">
          <label htmlFor="expiration" className="form__expiration--label">
            Exp. Date (MM/YY)
          </label>
          <input
            type="text"
            id="expiration"
            className="form__expiration--input-month"
            placeholder="MM"
          />
          <input
            type="text"
            id="expiration"
            className="form__expiration--input-year"
            placeholder="YY"
          />
          <p className="form__error">Can't be blank</p>
        </div>
        <div className="form__cvc">
          <label htmlFor="cvc" className="form__cvc--label">
            CVC
          </label>
          <input
            type="text"
            id="cvc"
            className="form__cvc--input"
            placeholder="e.g. 123"
          />
          <p className="form__error">Can't be blank</p>
        </div>
        <div className="form__submit">
          <button className="form__submit--btn btn">Confirm</button>
        </div>
      </form>
    </>
  );
}
