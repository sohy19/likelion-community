import { Main, MediaDiv } from "./components/styledComponent";

// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons

import { darkTheme, lightTheme, GlobalStyles } from "./components/styles";
import { ThemeProvider } from "styled-components";
import { useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slogan from "./components/Slogan";
import ShowPostList from "./components/ShowPostList";
import { Route, Routes } from "react-router-dom";
import ShowPost from "./components/ShowPost";
import WritePost from "./components/WritePost";

const API_URL = "https://reactapitest.pythonanywhere.com/api/";

function App() {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<>
			<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
				<GlobalStyles />
				<MediaDiv>
					<Header darkMode={darkMode} setDarkMode={setDarkMode} />
					<Main>
						<Slogan />
						<Routes>
							<Route
								path="/"
								element={<ShowPostList apiUrl={API_URL} />}
							></Route>
							<Route
								path="/write"
								element={<WritePost apiUrl={API_URL}></WritePost>}
							></Route>
							<Route
								path="/post/:postId"
								element={<ShowPost apiUrl={API_URL}></ShowPost>}
							></Route>
						</Routes>
					</Main>
				</MediaDiv>
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default App;
