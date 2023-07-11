import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
	const { t, i18n } = useTranslation();

	const changeLanguage = (lng) => {
		if (lng === 'fa') {
			document.body.classList.add('body-fa');
			i18n.changeLanguage(lng);
		}
		if (lng !== 'fa') {
			i18n.changeLanguage(lng);
			document.body.classList.remove('body-fa');
		}
	};

	const [isActive, setActive] = useState('false');

	const handleToggle = () => {
		document.body.classList.toggle('mobile-nav-active');
		setActive(!isActive);
	};

	const [langActive, setLangActive] = useState('en_US');

	useEffect(() => {
		if (i18n.language === 'fa') {
			setLangActive('fa');
			document.body.classList.toggle('mobile-nav-active');
			setActive('false');
		} else if (i18n.language === 'fr') {
			setLangActive('fr');
			document.body.classList.toggle('mobile-nav-active');
			setActive('false');
		} else {
			setLangActive('en_US');
			setActive('false');
			document.body.classList.remove('mobile-nav-active');
		}
	}, [i18n.language]);

	const closemenu = () => {
		document.body.classList.remove('mobile-nav-active');
		setActive(!isActive);
	};

	return (
		<div>
			<i
				onClick={handleToggle}
				className={
					isActive
						? 'bi-list bi mobile-nav-toggle d-xl-none'
						: 'bi-x bi mobile-nav-toggle d-xl-none'
				}
			></i>

			<header id="header">
				<div className="d-flex flex-column">
					<div className="profile">
						<img
							src="assets/img/profile-img.jpg"
							alt="Tofigh Nazari"
							title="Tofigh Nazari"
							className="img-fluid rounded-circle"
						/>
						<h1 className="text-light">
							<a href="/">{t('Tofigh Nazari')}</a>
						</h1>
						<div className="social-links mt-3 text-center">
							<a
								href="https://instagram.com/tofigh.nazari"
								rel="noreferrer"
								target="_blank"
								className="instagram"
							>
								<i className="bx bxl-instagram"></i>
							</a>
							<a
								href="https://linkedin.com/in/tofighnazari"
								rel="noreferrer"
								target="_blank"
								className="linkedin"
							>
								<i className="bx bxl-linkedin"></i>
							</a>
							<a
								href="https://github.com/towfigh"
								target="_blank"
								rel="noreferrer"
								className="github"
							>
								<i className="bx bxl-github"></i>
							</a>
						</div>
					</div>

					<nav id="navbar" className="nav-menu navbar">
						<ul>
							<button className="btn-nav" onClick={() => closemenu()}>
								<li>
									<a href="#hero" className="nav-link scrollto">
										<i className="bx bx-home"></i> <span>{t('Home')}</span>
									</a>
								</li>
							</button>
							<button className="btn-nav" onClick={() => closemenu()}>
								<li>
									<a href="#about" className="nav-link scrollto">
										<i className="bx bx-user"></i> <span>{t('About Me')}</span>
									</a>
								</li>
							</button>
							<button className="btn-nav" onClick={() => closemenu()}>
								<li>
									<a href="#skills" className="nav-link scrollto">
										<i className="bx bx-book-content"></i>{' '}
										<span>{t('My Skills')}</span>
									</a>
								</li>
							</button>
							<button className="btn-nav" onClick={() => closemenu()}>
								<li>
									<a href="#resume" className="nav-link scrollto">
										<i className="bx bx-file-blank"></i>{' '}
										<span>{t('Resume')}</span>
									</a>
								</li>
							</button>
							<button className="btn-nav" onClick={() => closemenu()}>
								<li>
									<a href="#services" className="nav-link scrollto">
										<i className="bx bx-server"></i>{' '}
										<span>{t('My Services')}</span>
									</a>
								</li>
							</button>
							<button className="btn-nav" onClick={() => closemenu()}>
								<li>
									<a href="#contact" className="nav-link scrollto">
										<i className="bx bx-envelope"></i>{' '}
										<span>{t('Contact')}</span>
									</a>
								</li>
							</button>
						</ul>
					</nav>
					<div className="lang">
						<button className="btn-lang" onClick={() => changeLanguage('fr')}>
							<img
								src="assets/img/fr.png"
								className={langActive === 'fr' ? 'langImgActive' : 'langImg'}
								alt="French"
								title="French"
							/>
						</button>
						<button className="btn-lang" onClick={() => changeLanguage('fa')}>
							<img
								src="assets/img/ir.png"
								className={langActive === 'fa' ? 'langImgActive' : 'langImg'}
								alt="persian"
								title="persian"
							/>
						</button>
						<button
							className="btn-lang"
							onClick={() => changeLanguage('en_US')}
						>
							<img
								src="assets/img/england.png"
								className={langActive === 'en_US' ? 'langImgActive' : 'langImg'}
								alt="English"
								title="English"
							/>
						</button>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
