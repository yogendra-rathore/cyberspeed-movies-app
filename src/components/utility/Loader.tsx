import { Box } from '@mui/material';
import LoaderImg from '../../assets/icons/clapper-board-loader.gif';
function Loader() {
  return (
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'90vh'}}>
      <img src={LoaderImg} style={{width:80,height:80}} alt="loader" />
        <span style={{marginTop:5}}>Fetching Movies...</span>
      </Box>
  )
}

export default Loader;