import clickLogo from "./images/clickLogo.png";
import Button from "./components/button";

function App() {
  const handleClick = () => {
    console.log('click');
  }

  const resetCounter = () => {
    console.log('reset');
}

  return (
    <div className="flex flex-wrap items-center justify-center pt-4 font-serif">
      <div className="w-full flex items-center justify-center m-5">
        <img className="object-scale-down h-4" 
        src={clickLogo}
        alt="Click Logo" />
      </div>
      <div className="contenedor-ppal"> //CAMBIAR
        <Button 
        text='Click'
        isClickButton={true}
        handleClick= {handleClick}
        />
        <Button 
        text='Reset'
        isClickButton={false}
        handleClick= {resetCounter}
        />
      </div>
    </div>
  );
}

export default App;
