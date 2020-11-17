import React from 'react';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import cvimg from '../images/cv.png'

class Jobimg extends React.Component{
    render(){
        const top100Films = [
            { title: 'Not defined yet!' },
        ]
        return(
            <div className="jobimg">
                <p class="jobtext"><span> Find a job you </span> <span className="span">love.</span></p>
                <div className="searchwidth">
                  {/* <span style={{display:"inline"}}>> */}
      <Autocomplete
        className="search"
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
          {...params}
          label="Search input"
          margin="normal"
          variant="outlined"
          InputProps={{ ...params.InputProps, type: 'search' }}
          />
          )}
      />
          <button type="button" className="btnsearch btn btn-outline-primary">Search</button>
</div>
<div className="cvimg">
<img class="imgcv" src={cvimg}  />
<p className="getstart">Get Started</p>
</div>
            </div>
        );
    };
};
export default Jobimg;