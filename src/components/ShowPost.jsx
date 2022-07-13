import React, { useState, useEffect, useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
	LoadingDiv,
	LoadingImg,
	PostReadDiv,
	PostReplDiv,
	PostSection,
	PostTitle,
	PostTitleDiv,
	Repl,
	ReplInput,
	ReplSubmitDiv,
	ReplTitleDiv,
	Replwriter,
	WritereplDiv,
} from "./styledComponent";

const countRepls = (repls) => {
	console.log("리뷰 개수를 세는 중...");
	return repls.length;
};

const PostAndRepl = React.memo(
	({ post, postLoading, replCount, replLoading, repls }) => {
		return (
			<>
				<PostTitleDiv>
					<PostTitle>
						{/* title */}
						{post && post.title}
					</PostTitle>
				</PostTitleDiv>
				{postLoading ? (
					<LoadingDiv>
						<LoadingImg src={`${process.env.PUBLIC_URL}/img/loading.svg`} />
					</LoadingDiv>
				) : (
					<PostReadDiv>{post && post.contents} </PostReadDiv>
				)}
				{/* post contents */}
				<ReplTitleDiv>댓글 {replCount}</ReplTitleDiv>
				{replLoading ? (
					<LoadingDiv>
						<LoadingImg src={`${process.env.PUBLIC_URL}/img/loading.svg`} />
					</LoadingDiv>
				) : (
					repls &&
					repls.map((element) => (
						<PostReplDiv key={element}>
							<Replwriter>익명</Replwriter>
							<Repl>{element}</Repl>
						</PostReplDiv>
					))
				)}
			</>
		);
	}
);

const ShowPost = ({ apiUrl }) => {
	const Params = useParams();
	const [post, setPost] = useState(null);
	const [repls, setRepls] = useState([]);
	const [postLoading, setPostLoading] = useState(true);
	const [replLoading, setReplLoading] = useState(true);
	const replInput = useRef();
	const [repl, setRepl] = useState("");

	useEffect(() => {
		axios.get(`${apiUrl}posts/${Params.postId}`).then((response) => {
			setPost(response.data);
			setPostLoading(false);
			setRepls(response.data.repls);
			setReplLoading(false);
			replInput.current.focus();
		});
	}, []);

	const onChange = (e) => {
		setRepl(e.target.value);
	};

	// for useMemo
	const replCount = useMemo(() => countRepls(repls), [repls]);
	// const replCount = countRepls(repls);

	const onSubmitRepl = () => {
		axios
			.post(`${apiUrl}repl/`, {
				contents: repl,
				post: Params.postId,
			})
			.then(() => {
				window.location.reload();
			});
	};

	if (!Params.postId) {
		return <PostSection>잘못된 접근입니다.</PostSection>;
	}
	return (
		<div>
			<PostSection>
				<PostAndRepl
					post={post}
					postLoading={postLoading}
					replCount={replCount}
					replLoading={replLoading}
					repls={repls}
				/>
				<WritereplDiv>
					<ReplInput
						onChange={onChange}
						value={repl}
						ref={replInput}
					></ReplInput>
					<ReplSubmitDiv onClick={onSubmitRepl}>
						<span>입력</span>
					</ReplSubmitDiv>
				</WritereplDiv>
			</PostSection>
		</div>
	);
};

export default React.memo(ShowPost);
