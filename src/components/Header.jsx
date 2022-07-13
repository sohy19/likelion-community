import {
	HeaderDiv,
	TitleLogoDiv,
	TitleBig,
	TitleSmall,
	SubHeaderDiv,
} from "./styledComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Header({ darkMode, setDarkMode }) {
	const toggleDarkMode = () => {
		setDarkMode((darkMode) => !darkMode);
	};

	const navigate = useNavigate();
	const goHome = () => {
		navigate("../");
	};

	return (
		<HeaderDiv>
			<TitleLogoDiv>
				<TitleBig onClick={goHome}>멋사</TitleBig>
				<TitleSmall onClick={goHome}>익명 게시판</TitleSmall>
			</TitleLogoDiv>
			<SubHeaderDiv>
				{darkMode ? (
					<FontAwesomeIcon onClick={toggleDarkMode} icon={faSun} />
				) : (
					<FontAwesomeIcon onClick={toggleDarkMode} icon={faMoon} />
				)}
			</SubHeaderDiv>
		</HeaderDiv>
	);
}
export default Header;
