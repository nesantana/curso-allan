import './Card.css'

const Card = (data) => {
  console.log(data.user);
  return (
    <div className="card">
      <div className="img"></div>
      <div className="content">
        <div className="title">{data.user.name}</div>
        <div className="action">ver informações</div>
      </div>
    </div>
  )
}

export default Card;