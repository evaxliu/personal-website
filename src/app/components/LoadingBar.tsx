const LoadingBar = () => (
  <div className='loading-container'>
    <label htmlFor='loading'>Loading...</label>
    <progress id='loading' value='0' max='100'></progress>
  </div>
)

export default LoadingBar;