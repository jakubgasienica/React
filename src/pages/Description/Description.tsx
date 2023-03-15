import css from "./Description.module.css";
import { useParams } from "react-router-dom";
import { useDescription } from "./useDescription";
import React from "react";
import logo from "./logo.png";
import { getDatePublished, getDateActive } from "../../utils/getDate";

export const Description = () => {
	const { id } = useParams();
	const { offer } = useDescription(id ? parseInt(id) : 0);
	return (
		<div className={css.box}>
			<div className={css.titleBox}>
				<h3 className={css.title}>{offer?.title}</h3>
				<img
					className={css.img}
					src={offer?.thumb}
					onError={event => {
						(event.target as HTMLImageElement).src = logo;
					}}
					alt='logo'
				/>
			</div>
			<div className={css.propertiesBox}>
				<div className={css.properties}>
					<i className='fa-solid fa-location-dot' />
					<p className={css.paragraph}>{offer?.companyCity}</p>
				</div>
				<div className={css.properties}>
					<i className='fa-solid fa-laptop-code' />
					<p className={css.paragraph}>
						{offer?.categories.map(cat => cat.name).join(", ")}{" "}
					</p>
				</div>
				<div className={css.properties}>
					<i className='fa-solid fa-dollar-sign' />
					<p className={css.paragraph}>{offer?.salary.map(s => s.name)}:</p>
					<p className={css.paragraph}>{offer?.salary.map(s => s.salary)}</p>
				</div>
				<div className={css.properties}>
					<i className='fa-solid fa-plus' />
					<p className={css.paragraph}>
						{offer?.benefits.map(benefit => benefit.name).join(", ")}
					</p>
				</div>
				<div className={css.properties}>
					<i className='fa-solid fa-layer-group' />
					<p className={css.paragraph}>{offer?.seniority.name}</p>
				</div>
				<div className={css.properties}>
					<i className='fa-regular fa-building' />
					<p className={css.paragraph}>{offer?.companyName}</p>
				</div>
			</div>
			<div className={css.descriptionBox}>
				<h3 className={css.subtitle}>What's more?</h3>
				<p className={css.description}>{offer?.description}</p>
			</div>

			<div className={css.dateBox}>
				<p className={css.dateText}>
					Published: {getDatePublished(offer?.date ? offer?.date : new Date())}
				</p>
				<p className={css.dateText}>
					Active:{" "}
					{getDateActive(
						offer?.date ? offer?.date : new Date(),
						offer?.duration ? offer.duration : 30
					)}
				</p>
			</div>
		</div>
	);
};
