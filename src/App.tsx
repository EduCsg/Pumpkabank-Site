import Header from "./sections/Header";

import WelcomeSection from "./sections/WelcomeSection";
import SecondSection from "./sections/SecondSection";
import InfoSection from "./sections/InfoSection";
import CardsSection from "./sections/CardsSection";
import AppScreen from "./sections/DownloadSection";
import StoresSection from "./sections/StoresSection";
import VenhaTambemSection from "./sections/VenhaTambemSection";
import Footer from "./sections/Footer";

// Footer

function App() {
	return (
		<>
			<Header />

			<WelcomeSection />

			<SecondSection />

			<InfoSection />

			<CardsSection />

			<AppScreen />

			<StoresSection />

			<VenhaTambemSection />

			<Footer />
		</>
	);
}

export default App;
