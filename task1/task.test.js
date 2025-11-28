import { describe, it } from "node:test";
import { deepEqual } from "node:assert/strict";

import { getLongestBookByAuthorName } from "./task.js";

const createAuthors = () => ([
  {
    "id": 1,
    "name": "George Orwell"
  },
  {
    "id": 2,
    "name": "J.K. Rowling"
  },
])

const createBook = (authorId, title, pages) => ({
  title,
  pages,
  release_year: 1949,
  author_id: authorId
})

describe('getLongestBookByAuthorName', () => {
  describe('when the books and authors given', () => {
    describe('and the author is found among multiple different authors', () => {
      describe('and they have a single book', () => {
        it('should return the book', () => {
          const authors = createAuthors();
          const [author0, author1] = authors;
          const books = [
            createBook(author0.id, 'Title 1', 300),
            createBook(author1.id, 'Title 2', 200),
            createBook(author1.id, 'Title 3', 100)
          ]
          const expected = 'Title 1'

          const actual = getLongestBookByAuthorName(authors, books, author0.name);

          deepEqual(actual, expected)
        });
      });
      describe('and they have multiple books', () => {
        it('should return the longest book\'s title', () => {
          const authors = createAuthors();
          const [author0, author1] = authors;
          const books = [
            createBook(author0.id, 'Title 1', 300),
            createBook(author0.id, 'Title 2', 400),
            createBook(author1.id, 'Title 3', 100)
          ]
          const expected = 'Title 2'

          const actual = getLongestBookByAuthorName(authors, books, author0.name);

          deepEqual(actual, expected)
        });
        it('should return the longest book\'s title, it is positioned before the second longest', () => {
          const authors = createAuthors();
          const [author0, author1] = authors;
          const books = [
            createBook(author0.id, 'Title 2', 400), // 1st position
            createBook(author0.id, 'Title 1', 300), // 2nd position
            createBook(author1.id, 'Title 3', 100)
          ]
          const expected = 'Title 2'

          const actual = getLongestBookByAuthorName(authors, books, author0.name);

          deepEqual(actual, expected)
        });
        describe('and the length is the same for two longest book', () => {
          it('should rethrn the book with the longest title, first in alphabetical order', () => {
            const authors = createAuthors();
            const [author0, author1] = authors;
            const books = [
              createBook(author0.id, 'B Title 1', 300),
              createBook(author0.id, 'A Title 2', 300),
              createBook(author1.id, 'Title 3', 100)
            ]
            const expected = 'A Title 2'

            const actual = getLongestBookByAuthorName(authors, books, author0.name);

            deepEqual(actual, expected)
          })
        });
        it('should return the book with a longest title, another authors have a longer book.', () => {
          const authors = createAuthors();
          const [author0, author1] = authors;
          const books = [
            createBook(author0.id, 'Title 1', 200),
            createBook(author0.id, 'Title 2', 400),
            createBook(author1.id, 'Title 3', 500)
          ]
          const expected = 'Title 2'

          const actual = getLongestBookByAuthorName(authors, books, author0.name);

          deepEqual(actual, expected)
        })
      });
      describe('and they have no book', () => {
        it('it should return null', () => {
          const authors = createAuthors();
          const [author0, author1] = authors;
          const books = [
            createBook(author1.id, 'Title 1', 200),
            createBook(author1.id, 'Title 2', 400),
            createBook(author1.id, 'Title 3', 500)
          ]
          const expected = null

          const actual = getLongestBookByAuthorName(authors, books, author0.name);

          deepEqual(actual, expected)
        })
      });
    });
    describe('and the author is not found', () => {
      it('should return null, author name given', () => {
        const authors = createAuthors();
        const [author0, author1] = authors;
        const books = [
          createBook(author0.id, 'Title 1', 200),
          createBook(author1.id, 'Title 2', 400),
          createBook(author1.id, 'Title 3', 500)
        ]
        const authorName = 'Non existent'
        const expected = null

        const actual = getLongestBookByAuthorName(authors, books, authorName);

        deepEqual(actual, expected)
      });
      it('should return null, empty string given', () => {
        const authors = createAuthors();
        const [author0, author1] = authors;
        const books = [
          createBook(author0.id, 'Title 1', 200),
          createBook(author1.id, 'Title 2', 400),
          createBook(author1.id, 'Title 3', 500)
        ];
        const authorName = '';
        const expected = null;

        const actual = getLongestBookByAuthorName(authors, books, authorName);

        deepEqual(actual, expected)
      });
    });
  });
  describe('when the books and authors are empty arrays', () => {
    it('should return null, authors given', () => {
      const authors = [];
      const books = [];
      const authorName = 'Some Author';
      const expected = null;

      const actual = getLongestBookByAuthorName(authors, books, authorName);

      deepEqual(actual, expected)

    });
    it('should return null, empty string given', () => {
      const authors = [];
      const books = [];
      const authorName = '';
      const expected = null;

      const actual = getLongestBookByAuthorName(authors, books, authorName);

      deepEqual(actual, expected)
    });
  });
})