import Header from "./components/Header";

import WelcomeSection from "./components/WelcomeSection";
import SecondSection from "./components/SecondSection";
import InfoSection from "./components/InfoSection";
import ChameTodosSection from "./components/ChameTodosSection";
import AppScreen from "./components/DownloadSection";
import StoresSection from "./components/StoresSection";
import VenhaTambemSection from "./components/VenhaTambemSection";

// Footer

function App() {
	return (
		<>
			<Header />

			<WelcomeSection />

			<SecondSection />

			<InfoSection />

			<ChameTodosSection />

			<AppScreen />

			<StoresSection />

			<VenhaTambemSection />
		</>
	);
}

export default App;
