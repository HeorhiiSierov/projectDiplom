import Main from "../../comonents/Main/Main";
import InputDiscount from "../../comonents/InputDiscount/InputDiscount";
import Sales from "../../comonents/Sales/Sales";
import Categories2 from "../../comonents/Categories/Categories 2";
function MainPage() {
  return (
    <div>
      <Main />
      <Categories2 show4={true} />
      <InputDiscount />
      <Sales />
    </div>
  )
}

export default MainPage;