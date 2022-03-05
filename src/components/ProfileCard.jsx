// export function Profile(props){
// return(
//     <div className='container'>
//     <div className='circle'>
//         <img className='img-circle' src={ props.imgUrl } alt="profile-img"/>
//         <h2 className='name'>{ props.name }</h2>
//         <h3 className='eth'>{ props.eth }</h3>
//     </div>
//     </div>
// );
// }

export function ProfileCard(props) {
  return (
    <div className="clearfix">
      <div className="row">
        <div className="col-md-4 animated fadeIn">
          <div className="card">
            <div className="card-body">
              <div className="avatar">
                <img
                  src={"bulbul-ahmed-cIEb4UJ4ruk-unsplash.jpg"}
                  className="card-img-top"
                  alt=""
                  style={{
                    width: "88px",
                    height: "88px",
                    top: "-1px",
                    left: "-5px",
                    position: "absolute"
                  }}
                />
              </div>
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.eth}</p>
            </div>
          </div>
        </div>
        )
      </div>
    </div>
  );
}
