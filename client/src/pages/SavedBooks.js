import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import { useQuery, useMutation } from '@apollo/client';

import { REMOVE_BOOK } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import Auth from '../utils/auth';

import { removeBookId, saveBookIds } from '../utils/localStorage';

const SavedBooks = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const userData = data?.me || [];


  const [removeBOOK, { error }] = useMutation(REMOVE_BOOK, {
    update(cache, { data: { removeBOOK } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removeBOOK },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleRemoveBook = async (book) => {
    try {
      const { data } = await removeBOOK({
        variables: { book },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!books.length) {
    return <h3>No books Yet</h3>;
  }

  // upon success, remove book's id from localStorage
  removeBookId(bookId);
} catch (err) {
  console.error(err);
}
  };

// if data isn't here yet, say so
if (!userDataLength) {
  return <h2>LOADING...</h2>;
}
const savedBookIds = userData.savedBooks.map((book) => book.bookId);
saveBookIds(savedBookIds);
return (
  <>
    <Jumbotron fluid className='text-light bg-dark'>
      <Container>
        <h1>Viewing saved books!</h1>
      </Container>
    </Jumbotron>
    <Container>
      <h2>
        {userData.savedBooks.length
          ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
          : 'You have no saved books!'}
      </h2>
      <CardColumns>
        {userData.savedBooks.map((book) => {
          return (
            <Card key={book.bookId} border='dark'>
              {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <p className='small'>Authors: {book.authors}</p>
                <Card.Text>{book.description}</Card.Text>
                <Button className='btn-block btn-danger' onClick={() => handleRemoveBook(book.bookId)}>
                  Delete this Book!
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </CardColumns>
    </Container>
  </>
);
};

export default SavedBooks;
