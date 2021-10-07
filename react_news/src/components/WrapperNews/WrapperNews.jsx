import ItemNews from '../ItemNews'

function WrapperNews({ newsList }) {

    return(
        newsList.map((news, index) => {
            return (
                <ItemNews
                    key={ news.id }
                    img={ news.img }
                    title={ news.title }
                    content={ news.content }
                    date={ news.date }
                />)
        })
    )
}

export default WrapperNews