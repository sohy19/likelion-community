import React from "react";
import { useRef, useEffect } from "react";
import { TitleInput, ContentsInput } from "./styledComponent";

const InputPost = ({ onChange, title, contents }) => {
	const titleInput = useRef();
	const contentsInput = useRef();
	useEffect(() => {
		titleInput.current.focus();
	}, []);
	const onKeyUp = (e) => {
		if (e.key === `Enter`) {
			contentsInput.current.focus();
		}
	};

	return (
		<>
			<TitleInput
				name="title"
				value={title}
				onChange={onChange}
				placeholder="제목을 입력해주세요. (15자 이내)"
				ref={titleInput}
				onKeyUp={onKeyUp}
			/>
			<ContentsInput
				name="contents"
				value={contents}
				onChange={onChange}
				cols="30"
				rows="10"
				ref={contentsInput}
			></ContentsInput>
		</>
	);
};

export default InputPost;
