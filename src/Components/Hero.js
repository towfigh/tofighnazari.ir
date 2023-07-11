import Typed from 'react-typed';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const Hero = () => {
	const { t, i18n } = useTranslation();

	const [isFa, setFa] = useState('false');

	useEffect(() => {
		if (i18n.language === 'fa') {
			setFa(true);
		} else {
			setFa(false);
		}
	}, [i18n.language]);

	const strings = [t('a Web Developer...'), t('a Programmer...')];

	return (
		<section
			id="hero"
			className="d-flex flex-column justify-content-center align-items-center"
		>
			<div className="hero-container" data-aos="fade-in">
				<h1 className={isFa ? 'fa' : ''}>{t('Tofigh Nazari')}</h1>
				<p className={isFa ? 'pfa' : ''}>
					{t("I'm")}{' '}
					<span className="typed">
						<Typed
							strings={strings}
							typeSpeed={170}
							backSpeed={60}
							loop
						></Typed>
					</span>
					{/* {t(' ')} */}
				</p>
			</div>
		</section>
	);
};

export default Hero;
