import React,{useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'
// iimage 
import searchIcon from '../../images/search-icon.svg'
// styles
import {  Wrapper,Content } from './SearchBar.Style';

const SearchBar = ({setSearchTerm}) => {
    const [state, setState] = useState('')
    const initial = useRef(true);

    
    useEffect(()=>{
        if(initial.current){
            initial.current = false;
            return
        }

        const timer = setTimeout(()=> {
            setSearchTerm(state);
        }, 500)

        return () => clearTimeout(timer)
    },[setSearchTerm, state])
    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon'/>
                <input
                    type='search'
                    placeholder='Search Movie'                    
                    onChange={ event => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    )
}

SearchBar.propTypes = {
    callCack: PropTypes.func
}

export default SearchBar;