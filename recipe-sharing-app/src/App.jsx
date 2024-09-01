import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import SearchBar from './components/SearchBar';
import EditRecipeForm from './components/EditRecipeForm';
import useRecipeStore from './recipeStore'; // Import Zustand store to manage recipes

const App = () => {
  // Accessing recipes from Zustand store
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <Router>
      <div>
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          {/* Route for viewing recipe details */}
          {recipes.map((recipe) => (
            <Route
              key={recipe.id}
              path={`/recipes/${recipe.id}`}
              element={<RecipeDetails recipeId={recipe.id} />}
            />
          ))}
          {/* Route for adding a new recipe */}
          <Route path="/add-recipe" element={<AddRecipeForm />} />
          {/* Route for editing a recipe */}
          {recipes.map((recipe) => (
            <Route
              key={recipe.id}
              path={`/edit-recipe/${recipe.id}`}
              element={<EditRecipeForm recipe={recipe} />}
            />
          ))}
          {/* Other existing routes */}
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
