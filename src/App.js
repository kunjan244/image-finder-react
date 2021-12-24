import { useEffect, useState } from 'react'; 
import { Box } from '@material-ui/core';
import Images from './components/Images';
import Navbar from './components/Navbar';
import BreadCrumb from './components/BreadCrumb';
import { getImages } from'./srvices/api';
import SnackBar from './components/SnackBar';
function App() {
const [ data, setdata] =useState([]);
const [ count, setCount ] = useState(200);
const[ text, setText ] =useState('beach');
const[ open, toggleSnack ]= useState(false);
  useEffect(() => {

    if(count < 3 || count > 200){
     toggleSnack(true);
      return;
    }
    toggleSnack(false);
    const getData = async ()=>{
   await getImages(text,count).then(response  =>{
    setdata(response.data.hits);
  console.log(response.data.hits);
});
    }
    getData();
},[text, count])

const onTextChange = (text)=>{
  setText(text);
}

const onCountchange =(text)=>{
  setCount(count);
}
  return (
    <Box>
      <Navbar/>
    <BreadCrumb  onTextChange={onTextChange} onCountchange={onCountchange}/>
    
    <Images data={data} />
    <SnackBar open={open} toggleSnack={toggleSnack}/>
    </Box>
  );
}

export default App;
