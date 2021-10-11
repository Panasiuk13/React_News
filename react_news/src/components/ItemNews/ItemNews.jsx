import './ItemNews.css';

import {
    Stack,
    Button
} from '@mui/material'

function ItemNews({ img, title, content, date, isAuth, deleteNews, id }) {

    return (
        <div className="item-news">
            <div className="item-news__image-wrapper">
                <img className="item-news__image" src={ img } alt="" />
            </div>
            <div className="item-news__wrapper">
                <p className="item-news__title">{ title }</p>
                <p className="item-news__content">{ content }</p>
                <p className="item-news__date">{ date }</p>
            </div>
            {
                isAuth &&
                <Stack className="item-news__control" spacing={2} direction="row">
                    <Button onClick={() => deleteNews(id) } variant="text">Delete</Button>
                    <Button variant="conteined">Edit</Button>
                </Stack>
            }
        </div>
    )
}

export default ItemNews;