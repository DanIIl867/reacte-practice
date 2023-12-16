import s from './Painting.module.css'
import PropTypes from 'prop-types';

export const Painting = ({ title, url, quantity, price, author }) => {
	return (
		<li className={s.list}>
			<img src={url} alt="" width="480" />
			<h2>{title}</h2>
			<p>Автор: <a className={s.link} href={author.url}>{author.url}</a>{author.tag}</p>
			<p>Ціна: {price} грн</p>
			<p>Доступність: {quantity < 5 ? 'закінчується' : `є в наявності ${quantity}`}</p>
			<button className={s.btn} type="button">Додати в кошик</button>
		</li>
	)
}

Painting.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	url: PropTypes.string,
	quantity: PropTypes.number,
	price: PropTypes.number,
	author: PropTypes.object,
}