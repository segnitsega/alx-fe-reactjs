import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [
    // Sample recipes data for demonstration
    { id: 1, title: 'Spaghetti Bolognese', ingredients: ['spaghetti', 'meat', 'tomato sauce'], time: 30 },
    { id: 2, title: 'Chicken Curry', ingredients: ['chicken', 'curry powder', 'coconut milk'], time: 45 },
    { id: 3, title: 'Salad', ingredients: ['lettuce', 'tomato', 'cucumber'], time: 10 },
  ],
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
}));

export default useRecipeStore;
