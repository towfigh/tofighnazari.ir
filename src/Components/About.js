import { useTranslation } from 'react-i18next';

const About = () => {
	const { t, i18n } = useTranslation();

	return (
		<section id="about" className="about">
			<div className="container">
				<div className="section-title">
					<h2 className={i18n.language === 'fa' ? 'titleFa' : ''}>
						{t('About Me')}
					</h2>
					<p>
						{t(
							'Hello and welcome to my personal website. My name is Tofigh . I am a motivated Web Developer with more than 4 years experience. I have experience of working as a part of team and individually. I can quickly adapt to new situations and new teams. I believe in my knowledge, skills and commitment to research. I am hardworking and responsible person. Solving complex tasks not only make me well qualified but also develope my knowledge.',
						)}
					</p>
				</div>

				<div className="row">
					<div className="col-lg-4" data-aos="fade-right">
						<img
							src="assets/img/profile-img.png"
							className="img-fluid"
							alt="Tofigh Nazari"
						/>
					</div>
					<div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
						<h3>{t('I am a Web Developer...!')}</h3>
						<p className="fst-italic">{t('Quick information about me')} :</p>
						<div className="row">
							<div className="col-lg-6">
								<ul>
									<li>
										<i
											className={
												i18n.language === 'fa'
													? 'bi bi-chevron-left'
													: 'bi bi-chevron-right'
											}
										></i>{' '}
										<strong>{t('Birthday')}: </strong>{' '}
										<span> {t('6 April 1993')}</span>
									</li>
									<li>
										<i
											className={
												i18n.language === 'fa'
													? 'bi bi-chevron-left'
													: 'bi bi-chevron-right'
											}
										></i>{' '}
										<strong>{t('Website')}: </strong>{' '}
										<span> www.tofighnazari.ir</span>
									</li>
									<li>
										<i
											className={
												i18n.language === 'fa'
													? 'bi bi-chevron-left'
													: 'bi bi-chevron-right'
											}
										></i>{' '}
										<strong>{t('Phone')}: </strong>{' '}
										<span> {t('+1 581 668 6269')}</span>
									</li>
									<li>
										<i
											className={
												i18n.language === 'fa'
													? 'bi bi-chevron-left'
													: 'bi bi-chevron-right'
											}
										></i>{' '}
										<strong>{t('City')}: </strong>{' '}
										<span> {t('Chicoutimi/Quebec , Canada')}</span>
									</li>
								</ul>
							</div>
							<div className="col-lg-6">
								<ul>
									<li>
										<i
											className={
												i18n.language === 'fa'
													? 'bi bi-chevron-left'
													: 'bi bi-chevron-right'
											}
										></i>{' '}
										<strong>{t('Age')}:</strong> <span> 30</span>
									</li>
									<li>
										<i
											className={
												i18n.language === 'fa'
													? 'bi bi-chevron-left'
													: 'bi bi-chevron-right'
											}
										></i>{' '}
										<strong>{t('Degree')}:</strong> <span> {t('Master')}</span>
									</li>
									<li>
										<i
											className={
												i18n.language === 'fa'
													? 'bi bi-chevron-left'
													: 'bi bi-chevron-right'
											}
										></i>{' '}
										<strong>{t('Email')}:</strong>{' '}
										<span> tofigh.nazari93@gmail.com</span>
									</li>
									<li>
										<i
											className={
												i18n.language === 'fa'
													? 'bi bi-chevron-left'
													: 'bi bi-chevron-right'
											}
										></i>{' '}
										<strong>{t('Freelance')}:</strong>{' '}
										<span> {t('Available')}</span>
									</li>
								</ul>
							</div>
						</div>
						<p>
							{t(
								'A substantial thing for me is to have discipline not only in my work but also in the tools around me. In the other words; doing projects in a clean and client-approved manner is very important for me because irregularities are against my point of view...',
							)}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
