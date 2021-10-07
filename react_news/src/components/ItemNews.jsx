import './ItemNews.css';

function ItemNews({img, title, content, date}) {
   return (
       <div className="item-news">
           <div className="item-news__image-wrapper">
               <img className="item-news__image" src={ img } alt=""/>
           </div>
           <div className="item-news__wrapper">
               <p className="item-news__title">{ title }</p>
               <p className="item-news__content">{ content }</p>
               <p className="item-news__date">{ date }</p>
           </div>
       </div>
   )
}

export default ItemNews;