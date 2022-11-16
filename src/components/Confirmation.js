import confirmationImage from "../images/icon-complete.svg";

export default function Confirmation() {
  return (
    <>
      <div className="confirmation">
        <img
          src={confirmationImage}
          alt="icon-complete"
          className="confirmation__img"
        />
        <h1 className="confirmation__headline">THANK YOU!</h1>
        <p className="confirmation__text">We've added your card details</p>
        <button className="confirmation__btn btn">Continue</button>
      </div>
    </>
  );
}
