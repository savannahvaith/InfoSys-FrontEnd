

const Search = ({query,queryFunction,checked,checkHandler}) => {


  


  return (
    <>
      <label>Search</label>
      <input type="text" name="q" id="q" placeholder="Search" value={query} onChange={queryFunction} />
      <label>completed?</label>
      <input type="checkbox" value={checked} onChange={checkHandler} name="" id="" />
    </>
  );
};

export default Search;
