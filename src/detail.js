import React, {useState, useEffect} from 'react'
import './detail.css'
import SearchBar from './searchbar'
import Tours from './tours'
const url = 'https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter'

const Business = () => {
    const [group, setGroup] = useState([])
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState([])

    const getDetail = async () => {
        const response = await fetch(url);
        const result = await response.json();
        setGroup(result)
    }
    
    useEffect(() => {
        getDetail()
    }, [])

    const updateInput = async () => {
        const results = group.filter(element => {
        return element.Topic.toString().toLowerCase() === search.toLowerCase()             
        })
        setSearch(search)
        setQuery(results)
        console.log(results, group, search);
    }
     
    const searchArray = () => {
        updateInput()
    }

    

    const BarStyle = {display: "block", width: "20rem", bacckground:"#F2F1F9", border: "4px solid #fff", padding:"0.5rem", margin: "2rem auto"}
    
    return (
        <div>
            <SearchBar search={search} setSearch={setSearch} searchArray={searchArray}/>
            {query.length > 0 ? <Tours group={query} /> :  <Tours group={group} />}
        </div>
        
    )
}

export default Business
