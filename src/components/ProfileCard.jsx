
export function Profile(props){
return(
    <div className='prof-container'>
    <div className='circle'>
        <img className='img-circle' src={ props.imgUrl } alt="profile-img"/>
        <h2 className='name'>{ props.name }</h2>
        <h3 className='eth'>{ props.eth }</h3> 
    </div>
    </div>
);
}