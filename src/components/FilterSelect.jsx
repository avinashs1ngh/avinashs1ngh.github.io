import { useState } from 'react';

function FilterSelect({ filter, setFilter }) {
  const [isOpen, setIsOpen] = useState(false);
  const categories = ['All', 'Application', 'Web Design', 'Web development'];

  return (
    <div className="relative mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary-dark text-text-light px-4 py-2 rounded-xl w-full flex justify-between items-center"
      >
        <span>{filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
        <i className={`fas fa-chevron-down transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-primary-dark border border-primary-dark rounded-xl mt-2 z-10">
          {categories.map((category) => (
            <li key={category}>
              <button
                className="w-full text-left px-4 py-2 hover:bg-secondary-dark text-text-light"
                onClick={() => {
                  setFilter(category.toLowerCase());
                  setIsOpen(false);
                }}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FilterSelect;