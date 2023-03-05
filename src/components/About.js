export default function About(props) {
  let myPrimaryStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#000020' : 'white',
  };
  let mySecondaryStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#3b337e' : '#eaeaea',
  };
  return (
    <div className='container' style={myPrimaryStyle}>
      <h1 className='my-4'>About Us</h1>
      <div className='accordion' id='accordionExample'>
        <div className='accordion-item' style={mySecondaryStyle}>
          <h2 className='accordion-header' id='headingOne'>
            <button
              className='accordion-button'
              type='button'
              style={myPrimaryStyle}
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'>
              Analyze Your text
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse show'
            aria-labelledby='headingOne'
            data-bs-parent='#accordionExample'>
            <div className='accordion-body'>
              textUtils gives you a way to analyze your text quickly and
              efficiently.
            </div>
          </div>
        </div>
        <div className='accordion-item' style={mySecondaryStyle}>
          <h2 className='accordion-header' id='headingTwo'>
            <button
              className='accordion-button collapsed'
              type='button'
              style={myPrimaryStyle}
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'>
              Free to use
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            aria-labelledby='headingTwo'
            data-bs-parent='#accordionExample'>
            <div className='accordion-body'>
              textUtils is a free character counter tool that provides instant
              character counter & word count statistics for a given text.
              textUtils reports the number oof words and character. Thus it
              suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className='accordion-item' style={mySecondaryStyle}>
          <h2 className='accordion-header' id='headingThree'>
            <button
              className='accordion-button collapsed'
              type='button'
              style={myPrimaryStyle}
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'>
              Browser Compatible
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            aria-labelledby='headingThree'
            data-bs-parent='#accordionExample'>
            <div className='accordion-body'>
              This word counter software works in any web browser such as
              Chrome, Brave, Firefox, Safari. It Suits to count character in
              facebook, blog, books, excel document, pdf document essay, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
