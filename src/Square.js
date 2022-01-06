export default function Square({ black, children, ...props }) {
  const fill = black ? 'black' : 'white';
  const stroke = black ? 'white' : 'black';

  return (
    <div 
      style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: fill, 
        color: stroke,
        width: '100%',
        height: '100%',
      }} 
      {...props}
    >
      {children}
    </div>
  );
}