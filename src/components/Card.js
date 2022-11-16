import logo from "../images/card-logo.svg";

export default function Card() {
  return (
    <>
      <div className="card">
        <div className="card__back">
          <p className="card__back--cvc">000</p>
        </div>
        <div className="card__front">
          <img src={logo} alt="Logo" className="card__front--logo" />
          <p className="card__front--number">0000 0000 0000 0000</p>
          <p className="card__front--name">Jane Appleseed</p>
          <p className="card__front--date">00/00</p>
        </div>
      </div>
    </>
  );
}
