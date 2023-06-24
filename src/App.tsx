import Header from "./components/Header";

import WelcomeSection from "./components/WelcomeSection";
import SecondSection from "./components/SecondSection";
import InfoSection from "./components/InfoSection";
import ChameTodosSection from "./components/ChameTodosSection";
import AppScreen from "./components/DownloadSection";
// Lojas
// Venha tambem

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

			{/* <div className="h-[500px] bg-pink"></div> */}

			{/* TO-DO Mover com translate p/ tampar a mao de cima */}

			{/* Lojas section */}
			{/* Dividers 05 & 06 */}
		</>
	);
}

export default App;
