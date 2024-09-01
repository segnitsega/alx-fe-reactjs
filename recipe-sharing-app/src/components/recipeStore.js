import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],  // Existing array of recipes
  favorites: [],  // Array to hold favorite recipe IDs
  addFavorite: (recipeId) => set((state) => ({ 
    favorites: [...state.favorites, recipeId] 
  })),
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],  // Array to hold recommended recipes
  generateRecommendations: () => set((state) => {
    // Mock implementation: filter recipes based on a simple condition
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
