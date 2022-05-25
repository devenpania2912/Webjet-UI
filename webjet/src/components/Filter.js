import './Filter.css'

const Filter = () =>{
    return(
        <div className='filter'>
            <div className='heading bold'>Filter results</div>
            <div className='name-filter'>
                <div className='bold hotel-name'>Hotel Name</div>
                <div>
                    <input type="submit" value="Go" class="submit"/>
                    <div className='div'>
                        <input type="text" value="Enter Hotel Name" class="input"/>
                    </div>
                </div>
                    

            </div>
            <div className='quality-filter bold'>
                Quality Rating<br/><br/>
                <input className='check' type='checkbox' checked='true'/>All<br/><br/>
                <div className='stars'>
                    <input type='checkbox'/>    &#9830; &#9830; &#9830; &#9830; &#9830; <br/><br/>
                    <input type='checkbox'/>    &#9830; &#9830; &#9830; &#9830;<br/><br/>
                    <input type='checkbox'/>    &#9830; &#9830; &#9830;<br/><br/>
                    <input type='checkbox'/>    &#9830; &#9830;<br/><br/>
                    <input type='checkbox'/>    &#9830;<br/><br/>
                </div>
                <input type='checkbox'/>unrated
               
            
            </div>
        </div>
    )
}

export default Filter