import Book from './Book.js';

export default function Shelf() {
  // ========== Початок зони редагування ==============
 
 
  return (
    <section className="bookshelf">
          <h2> {arguments[0].title}</h2>
  
          <div className="bookshelf__container">
            <Book data={arguments[0].books[0]}/>
          </div>
        </section>
    );
  // ========== Кінець зони редагування ===============
}
