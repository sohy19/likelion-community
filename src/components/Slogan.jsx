import { SloganBig, SloganSection, SloganSmall } from "./styledComponent";
import React from "react";

function Slogan() {
	return (
		<SloganSection>
			<SloganBig>HACK YOUR LIFE</SloganBig>
			<SloganSmall>내 아이디어를 내 손으로 실현한다.</SloganSmall>
		</SloganSection>
	);
}

export default React.memo(Slogan);
