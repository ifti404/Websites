import dp from './assets/dp.jpeg';

function Card() {
  return (
    <>
      <div className="card">
        <img src={dp} alt="profile pic" className="card-pic" />
        <h2 className="card-title">Md Ifti</h2>
        <p className="card-desc">
          I am a student of BUBT & I love programming!
        </p>
      </div>
    </>
  );
}

export default Card;
