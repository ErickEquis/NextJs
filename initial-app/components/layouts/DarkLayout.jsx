

export const DarkLayout = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'black',
        borderRadius: '5px',
        padding: '10px'
    }}>
        <h3>Dark-Layout</h3>
        <div>
        { children }
        </div>
    </div>
  )
}
