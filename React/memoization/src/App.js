import { useState } from 'react'
import ReactMemoMain from './components/ReactMemo/ReactMemoMain'
import UseMemoMain from './components/UseMemo/UseMemoMain'

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      {/* <ReactMemoMain/> */}
      <UseMemoMain/>
    </div>
  );
}

export default App;
