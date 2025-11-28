
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from "react";

export default function App() {

  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch("/api/books")
      .then(res => res.json())
      .then(data => {
        setBooks(data)
        console.log('Fetched books:', data);
      })
      .catch(error => console.error(error))
  }, [])

  const filteredBooks = books.filter(book => {
    if (filter === 'bc') return book.releaseYear <= 0;
    if (filter === 'ac') return book.releaseYear > 0;
    return true;
  });

  return (
    <Container maxWidth="sm">
      <Typography variant="h1" align="left" gutterBottom>
        Books
      </Typography>
      <FormControl component="fieldset" sx={{ marginBottom: 2 }}>
        <RadioGroup
          row
          name="era"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        >
          <FormControlLabel value="bc" control={<Radio />} label="BC" />
          <FormControlLabel value="ac" control={<Radio />} label="AC" />
          <FormControlLabel value="all" control={<Radio />} label="All" />
        </RadioGroup>
      </FormControl>
      {filteredBooks.map(book => (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{book.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>Author: {book.author}</ListItem>
              <ListItem>Year: {book.releaseYear}</ListItem>
              <ListItem>Pages: {book.pages}</ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      ))}

    </Container>
  );
}


