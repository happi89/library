import { gql } from '@apollo/client';

export const ALL_AUTHORS = gql`
	query {
		allAuthors {
			name
			born
			bookCount
			id
		}
	}
`;

export const AUTHOR_NAMES = gql`
	query {
		allAuthors {
			name
		}
	}
`;

export const ALL_BOOKS = gql`
	query AllBooks {
		allBooks {
			title
			published
			genres
			id
			author {
				name
			}
		}
	}
`;

export const ADD_BOOK = gql`
	mutation createBook(
		$title: String!
		$author: String!
		$published: Int!
		$genres: [String!]!
	) {
		addBook(
			title: $title
			author: $author
			published: $published
			genres: $genres
		) {
			title
			author {
				name
				born
				bookCount
				id
			}
			published
			genres
		}
	}
`;

export const UPDATE_AUTHOR = gql`
	mutation addYear($name: String!, $setBornTo: Int!) {
		editAuthor(name: $name, setBornTo: $setBornTo) {
			name
			born
			bookCount
		}
	}
`;

export const LOGIN = gql`
	mutation login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			value
		}
	}
`;

export const FAVORITE_GENRE = gql`
	query favoriteGenre {
		me {
			favoriteGenre
		}
	}
`;

export const FILTER_BOOKS = gql`
	query filterBooks($genre: String) {
		allBooks(genre: $genre) {
			title
			genres
			published
			author {
				name
			}
			id
		}
	}
`;

export const DELETE_BOOK = gql`
	mutation deleteBook($title: String!) {
		deleteBook(title: $title) {
			title
		}
	}
`;

export const CREATE_USER = gql`
	mutation createUser(
		$username: String!
		$favoriteGenre: String!
		$password: String!
	) {
		createUser(
			username: $username
			favoriteGenre: $favoriteGenre
			password: $password
		) {
			username
		}
	}
`;
