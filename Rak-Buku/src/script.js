const SAVED_BOOKS = 'saved-books';
const STORAGE_KEY = 'BOOKS_APPS';

const bookLibrary = [];
const RENDER_BOOKS = 'render-books';

document.addEventListener('DOMContentLoaded', function () {
  const submitForm = document.getElementById('form');
  submitForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addBook();
  })
  if (isStorageExist()) {
    loadDataFromStorage();
  }
})

const addBook = () => {
  const judul = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const year = document.getElementById('date').value;

  const generateID = generateId();
  const newBookObject = generateNewBookObject(generateID, title, author, year, false);
  bookLibrary.push(newBookObject);

  document.dispatchEvent(new Event(RENDER_BOOKS));
  saveBook();
}

function generateId() {
  return +new Date();
}

function generateNewBookObject(id, title, author, year, isCompleted) {
  return {
    id,
    title,
    author,
    year,
    isCompleted
  }
};

const makeBook = (bookObject) => {
  const judulBuku = document.createElement('h2');
  judulBuku.innerText = "Title : " + bookObject.title;

  const author = document.createElement('p');
  author.innerText = "Author : " + bookObject.author;

  const tahunRilis = document.createElement('p');
  tahunRilis.innerText = bookObject.year;

  const textContainer = document.createElement('div');

  textContainer.classList.add('inner');
  textContainer.append(judulBuku,author,tahunRilis);

  const container = document.createElement('div');

  container.classList.add('item', 'shadow');
  container.append(textContainer);
  container.setAttribute('id', `book ${bookObject.id}`);

  if (bookObject.isCompleted) {
    const undoButton = document.createElement('button');
    undoButton.classList.add('undo-button');

    undoButton.addEventListener('click', function () {
      undoBookFromCompletedList(bookObject.id);
    });
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-button');

    trashButton.addEventListener('click', function () {
      removeBookFromCompletedList(bookObject.id);
    })
    container.append(undoButton, trashButton);
  } else {
    const checkButton = document.createElement('button');
    checkButton.classList.add('check-button');

    checkButton.addEventListener('click', function () {
      addBookToCompletedList(bookObject.id);
    })
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-button');

    trashButton.addEventListener('click', function () {
      removeBookFromCompletedList(bookObject.id);
    })
    container.append(checkButton, trashButton);
  }
  return container;
}

document.addEventListener(RENDER_BOOKS, function () {
  const uncompletedReaded = document.getElementById('bookLibrary');
  uncompletedReaded.innerHTML = '';

  const completedReaded = document.getElementById('completed-readed');
  completedReaded.innerHTML = '';

  for (const bookItem of bookLibrary) {
    const bookElement = makeBook(bookItem);
    if (!bookItem.isCompleted) {
      uncompletedReaded.append(bookElement);
    } else {
      completedReaded.append(bookElement);
    }
  }
})

document.addEventListener(SAVED_BOOKS, function () {
  console.log(localStorage.getItem(STORAGE_KEY));
})

function addBookToCompletedList(bookId) {
  const bookTarget = findBook(bookId);
  if (bookTarget == null) {
    return;
  }
  bookTarget.isCompleted = true;
  saveBook();
  document.dispatchEvent(new Event(RENDER_BOOKS));
}

function findBook(bookId) {
  for (const bookItem of bookLibrary) {
    if (bookItem.id === bookId) {
      return bookItem;
    }
  }
  return null;
}

function removeBookFromCompletedList(bookId) {
  const bookTarget = findBookIndex(bookId);

  if (bookId == -1) {
    return;
  }
  bookLibrary.splice(bookTarget, 1);
  document.dispatchEvent(new Event(RENDER_BOOKS));
  saveBook();
}

function undoBookFromCompletedList(bookId) {
  const bookTarget = findBook(bookId);

  if (bookTarget == null) {
    return;
  }
  bookTarget.isCompleted = false;
  document.dispatchEvent(new Event(RENDER_BOOKS));
  saveBook()
}

function findBookIndex(bookId) {
  for (const index in bookLibrary) {

    if (bookLibrary[index].id === bookId) {
      return index;
    }
  }
  return -1;
}

function saveBook() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(bookLibrary);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event(SAVED_BOOKS));
  }
}

function isStorageExist() {
  if (typeof (Storage) === undefined) {
    alert('your browser is does not support local storage');
    return false;
  }
  return true;
}

function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData);

  if (data != null) {
    for (const book of data) {
      bookLibrary.push(book)
    }
  }
  document.dispatchEvent(new Event(RENDER_BOOKS));
}
