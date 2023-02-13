export default function Book() {
  // ========== Початок зони редагування ==============
return (
  <div className="book">
    <img
      className="book__cover"
      alt={arguments[0].data.title}
      src={arguments[0].data.image}
    />
    <div className="book__summary">
      <span className="book__title">{arguments[0].data.title}</span>
      <span className="book__author">{arguments[0].data.author}</span>
    </div>
    <div className="book__actions">
    <span className="book__price">{arguments[0].data.price}</span>
      <button>До списку бажань</button>
    </div>
  </div>
);

  // ========== Кінець зони редагування ===============
}
