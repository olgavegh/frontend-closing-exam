# Working with Data Structures 🗃️

## Tasks

1. Implement a function according to the specification in the `./task.js`.
2. You can try out your implementation using the `./playground.js`. Do not call the function within the `./task.js`.
3. You can run the tests for this task by issuing the `npm test` command from this directory.

## Specification

The Librarian

We have authors and books. A book have one author but an author can create multiple books.

The author looks like this:

```json
{
  "id": 2,
  "name": "George Orwell"
}
```

The ID is a unique identifier (number) of the Author. In our dataset they name (string) is also unique.

The book looks like this:

```json
{
  "title": "1984",
  "pages": 328,
  "release_year": 1949,
  "author_id": 1
}
```

The title (string) is of course the title of the book. The pages (number) shows how long the book is
in page number, the release_year (number) is the release year of the book, the author_id (number)
is the ID of the author from the authors array.

Implement a function which returns the longest book's title from the given author. The longest book is a book which the pages number is the highest. 
The author is given by its name.

### Function arguments and return value

```js
function getLongestBookByAuthorName(allAuthors, allBooks, authorName) {}
```

Parameters:

- `allAuthors`: The array of all possible author objects to search for.
- `allBooks`: The array of all possible books to search for.
- `authorName`: A string, the name of the author whose longest book we want to find.

Returns:

- Only a single string or null. The title of the longest book of the given author (`authorName` param). 
- If the author do not found with the given name or it has no books, the function must return null.
- If multiple books have the same length, the book title must be the 1st in the alphabetical order.

### Example (based on the example `./data.js`):

```js
getLongestBookByAuthorName(authors, books, "George Orwell")
```

- It should return `"1984"` as a string
- Becuase George Orwell has two books the "1984" and the "Animal Farm" in the books array, and "1984" has more pages than the "Animal Farm".