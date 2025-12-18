import FocusInput, { Counter } from "../components/FormInputs/FocusInput"
import ParentDemo from "../components/HookCallBack/HookCallBack"
import Checkout from "../components/Payment/Checkout"

function Dashboard() {
  return (
    <div className="container mx-auto">
      <h1>
        Dashboard
        </h1>

        <div>
          <h2 className="text-3xl font-bold my-6">UseRef</h2>

          <FocusInput />
        </div>

        <div>
          <h2 className="text-3xl font-bold my-6">UseRef VS useState</h2>

          <Counter />
        </div>


        <div>
          <h2 className="text-3xl font-bold my-6">UseMemo</h2>
          <Checkout />
        </div>

        <div>
          <h2 className="text-3xl font-bold my-6">UseCallback</h2>
          <ParentDemo />
        </div>

    </div>
  )
}

export default Dashboard
