import { FormEvent, useCallback, useState } from "react"
import { SearchResults } from '../components/SearchResult';

export default function Home() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  async function handleSearch(e: FormEvent) {
    e.preventDefault()

    if (!search.trim()) {
      return
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()

    setResults(data)
  }

  const addToWishList = useCallback(async (id: number) => {
    console.log(id)
  }, [])
  
  return (
    <>
      <div>
        <h1>Serarch</h1>

        <form onSubmit={handleSearch}>
          <input 
            type="text" 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
          />
          <button type="submit">Buscar</button>
        </form>

        <SearchResults 
          results={results}
          onAddToWishList={addToWishList}
        />
      </div>
    </>
  )
}
