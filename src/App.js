import './App.css';
import { useEffect, useState } from 'react'
import FontList from './FontList';
function App() {
  const [fonts, setFonts] = useState([])
  console.log(fonts);
  const [currentItem, setCurrentItem] = useState(20)
  function loadMore() {
      setCurrentItem( (currentItem + 20))
  }
  useEffect(() => {
    fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBnjhyZkjyCjQeajwLiov5BpSwl1Iw4yYM')
      .then(res => {
        res.json()
          .then(data => {
            setFonts(data.items.splice(1, currentItem))
          })
      })
      .catch(err => console.log(err))
  }, [currentItem])

  return (
    <div className="App bg-dark">
         <FontList lists={fonts} loadMore={loadMore} />
    </div>
  );
}

export default App;
