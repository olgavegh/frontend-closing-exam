export function getLongestBookByAuthorName(authors, books, authorName) {
  // edge cases
  if (authors.length === 0 || books.length === 0 || authorName === "") {
    return null;
  }
  // Author
  const author = authors.find((author) => author.name === authorName);
  // the author is not found
  if (!author) return null;
  const authorId = author.id;

  // Books
  const authorBooks = books.filter((book) => book.author_id === authorId);
  const maxPages = Math.max(...authorBooks.map((book) => book.pages));
  //   console.log(maxPages);
  const longestBooks = authorBooks.filter((book) => book.pages === maxPages);
  //   console.log(longestBooks);

  const sortedLongestBooks = longestBooks.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  //   console.log(sortedLongestBooks);

  return sortedLongestBooks.length ? sortedLongestBooks[0].title : null;
}
