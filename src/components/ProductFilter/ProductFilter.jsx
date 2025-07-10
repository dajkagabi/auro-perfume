import React from 'react'; 

const ProductFilter = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
 
}) => {
  const categories = ['All', 'Eau de Parfum', 'Eau de Toilette', 'Eau Fraiche'];
  const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest Arrivals'];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };



  return (
    <div className="container mx-auto px-4 py-8">
      {/* Cím és Leírás szekció */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Shop All Fragrances</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our complete collection of luxury perfumes and find your perfect scent
        </p>
      </div>

      {/* Szűrő és Rendezési sáv */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-lg shadow-md mb-8">
        {/* Keresőmező */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search Fragrances..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-800"
            value={searchTerm}
            onChange={handleSearchChange}
            aria-label="Search fragrances"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {/* Keresés ikon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        </div>

        {/* Kategória Gombok */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Rendezési Legördülő Menü */}
        <div className="relative w-full md:w-auto">
          <select
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
            value={sortBy}
            onChange={handleSortChange}
            aria-label="Sort by"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            {/* Legördülő menü nyíl ikon */}
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.95 4.95z"/></svg>
          </div>
        </div>

      
      </div>

 
    
    </div>
  );
};

export default ProductFilter;