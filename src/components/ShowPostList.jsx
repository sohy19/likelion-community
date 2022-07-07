import {
	CursorDiv,
	LoadingDiv,
	LoadingImg,
	PagenumberDiv,
	PagingSection,
	PostListDiv,
	PostSection,
	PostTitle,
	PostTitleDiv,
} from "./styledComponent";
import {
	faArrowsRotate,
	faPenToSquare,
	faArrowLeft,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import loadingIcon from "../loading.svg";
import EachPost from "./EachPost";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const initialPostList = [
	{ id: 1, title: "시사N 대학기자상 취재" },
	{ id: 2, title: "학보, 시사N 대학기자상 취재" },
	{ id: 3, title: "학보, 시사N 대학기자상 취재" },
];

function ShowPostList() {
	const [loading, setLoading] = useState(true);
	const [isPost, setIsPost] = useState(false);
	const [postList, setPostList] = useState([]);

	const addPost = () => {
		setPostList((postList) => [
			...postList,
			{ id: 4, title: "학보, 시사N 대학기자상 취재" },
		]);
	};

	const navigate = useNavigate();
	const goWrite = () => {
		navigate("/write");
	};

	useEffect(() => {
		setTimeout(() => {
			setPostList(initialPostList);
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<>
			<PostSection>
				<PostTitleDiv>
					<FontAwesomeIcon onClick={addPost} icon={faArrowsRotate} />
					<PostTitle>익명 게시판</PostTitle>
					<CursorDiv>
						<FontAwesomeIcon icon={faPenToSquare} onClick={goWrite} />
					</CursorDiv>
				</PostTitleDiv>
				<PostListDiv>
					{loading ? (
						<LoadingDiv>
							<LoadingImg src={loadingIcon} />
						</LoadingDiv>
					) : isPost ? (
						<LoadingDiv>아직 기록된 글이 없습니다.</LoadingDiv>
					) : (
						<ul>
							{postList.map((element) => (
								<EachPost
									key={element.id}
									title={element.title}
									postId={element.id}
								/>
							))}
						</ul>
					)}
				</PostListDiv>
			</PostSection>
			<PagingSection>
				<PagenumberDiv>
					<FontAwesomeIcon icon={faArrowLeft} />
				</PagenumberDiv>
				<PagenumberDiv>2</PagenumberDiv>
				<PagenumberDiv>
					<FontAwesomeIcon icon={faArrowRight} />
				</PagenumberDiv>
			</PagingSection>
		</>
	);
}

export default ShowPostList;
