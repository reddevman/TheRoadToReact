import "./App.css";
import { useState } from "react";

const App = () => {
	console.log("App renders");
	const [searchTerm, setSearchTerm] = useState("React");

	const stories = [
		{
			title: "React",
			url: "https://reactjs.org/",
			author: "Jordan Walke",
			num_comments: 3,
			points: 4,
			objectID: 0,
		},
		{
			title: "Redux",
			url: "https://redux.js.org/",
			author: "Dan Abramov, Andrew Clark",
			num_comments: 2,
			points: 5,
			objectID: 1,
		},
	];

	// A callback handler
	const handleSearch = (e) => {
		// D callback handler
		// console.log(e.target.value);
		setSearchTerm(e.currentTarget.value);
	};

	const filterStories = stories.filter((story) => story.title.toLowerCase().includes(searchTerm.toLowerCase()));

	return (
		<>
			<div>
				<h1>My Hacker Stories</h1>

				{/* B callback handler */}
				<Search search={searchTerm} onSearch={handleSearch} />
				<hr />
				<List stories={filterStories} />
			</div>
		</>
	);
};

const Search = ({ onSearch, search }) => {
	console.log("Search renders");

	// const handleChange = (e) => {
	// 	setSearchTerm(e.target.value);
	// 	// C callback handler
	// 	onSearch(e);
	// };

	return (
		<div>
			<label htmlFor="search">Search: </label>
			<input id="search" type="text" value={search} onChange={onSearch} />
			{/* <p>
				Searching for <strong>{searchTerm}</strong>
			</p> */}
		</div>
	);
};

const List = ({ stories }) => {
	console.log("List renders");

	return (
		<ul>
			{stories.map((item) => (
				<Item key={item.objectID} item={item} />
			))}
		</ul>
	);
};

const Item = ({ item: { url, title, author, comments, points } }) => {
	console.log("Item renders");

	return (
		<li>
			<span>
				<a href={url}>{title}</a>
			</span>
			<span>{author}</span>
			<span>{comments}</span>
			<span>{points}</span>
		</li>
	);
};

export default App;
