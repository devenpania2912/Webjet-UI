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
            <div className='quality-filter bold'>Quality Rating</div>
        </div>
    )
}

export default Filter