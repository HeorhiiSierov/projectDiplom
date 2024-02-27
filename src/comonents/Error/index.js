
function ValidationError({ keyName, message }) {
  return (
    <>
      {keyName &&
        <p style={{ color: 'red', fontSize: "22px", paddingLeft: '15px' }}>
          {message}
        </p>
      }
    </>
  )
}

export default ValidationError;
