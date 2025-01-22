import Header from './Component/Header';
import Banner from './Component/Banner';
import RecipeSection from './Component/RecipesPart/RecipeSection';

function App() {

  return (
    <>
      <div className="mt-8 md:mx-24">
        <Header></Header>
        <Banner></Banner>
        <RecipeSection></RecipeSection>
      </div>
    </>
  )
}

export default App
