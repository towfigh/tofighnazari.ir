import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t } = useTranslation();

	return (
		<div>
			<footer id="footer">
				<div className="container">
					<div className="copyright">
						&copy;{t('2021 Tofigh, All rights reserved')}
						<div className="boot">
							{t('Raw Template by')}{' '}
							<a
								href="https://bootstrapmade.com/"
								target="_blank"
								rel="noreferrer"
							>
								BootstrapMade
							</a>
						</div>
					</div>
				</div>
			</footer>
			<a
				href="#hero"
				className="back-to-top d-flex align-items-center justify-content-center"
			>
				<i className="bi bi-arrow-up-short"></i>
			</a>
		</div>
	);
};

export default Footer;
